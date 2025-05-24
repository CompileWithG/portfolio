"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from '../components/Scene';
import { Montserrat } from 'next/font/google';
import styles from './work.module.css';
import Navbar from '../components/Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

export default function Work() {
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const cursor = document.querySelector(".cursor");
    const title = document.querySelector("#h1");
    const main = document.querySelector("#main");

    const container = horizontalContainerRef.current;
    if (container) {
      const boxes = gsap.utils.toArray(`.${styles.box}`) as HTMLElement[];
      const totalWidth = boxes.length * window.innerWidth;
      gsap.set(container, { width: `${totalWidth}px` });

      gsap.to(container, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.parentElement,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
          id: "horizontalScroll"
        }
      });

      boxes.forEach((box) => {
        ScrollTrigger.create({
          trigger: box,
          start: "left center",
          end: "right center",
          onEnter: () => gsap.fromTo(box, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }),
          onLeaveBack: () => gsap.to(box, { opacity: 0, y: 50, duration: 0.5 }),
        });
      });
    }

    window.addEventListener("wheel", function (dets) {
      const marqueElements = document.querySelectorAll(`.${styles.marque}`);
      marqueElements.forEach((marque) => {
        gsap.to(marque, {
          x: dets.deltaY > 0 ? '-200%' : '0%',
          ease: "none",
          duration: 4,
          repeat: -1,
        });
        const img = marque.querySelector("img");
        if (img) {
          gsap.to(img, {
            rotate: dets.deltaY > 0 ? 180 : 0,
          });
        }
      });
    });

    title?.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 4 });
    });
    title?.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1 });
    });
    main?.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main id="main" className={montserrat.className}>
      <div className="cursor" id={styles.cursor}></div>

      <div id={styles.page1}>
        <Navbar />
        <h1 id="h1">Experience And Work</h1>

        <div className={styles.canvasContainer}>
          <Canvas flat camera={{ fov: 45 }}>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <Scene />
            <EffectComposer>
              <Bloom
                intensity={12.0}
                luminanceThreshold={0}
                luminanceSmoothing={0}
                mipmapBlur
              />
            </EffectComposer>
          </Canvas>
        </div>

        <div id={styles.move}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.marque}>
              <h2>CODE DEBUG DEPLOY</h2>
              <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.horizontalScrollWrapper}>
        <div ref={horizontalContainerRef} className={styles.page2}>
          {[
            {
              upper: "Web Developer(Jan 2025-Present)",
              img: "./exosystems.jpg",
              title: "Exosystems",
              desc: "I implemented HashiCorp Vault and Consul for centralized secrets management, setting up a 3-node Consul cluster and containerizing both services. Managing Coolify, a Docker-based server management system, I streamlined application deployments. I further expanded my skills by writing GitHub Actions workflows in YAML, contributing to more efficient development processes.I currently work in decentralized tech such as IPFS and Orbitdb to overcome data dependency on a single entity.",
            },
            {
              upper: "Web Developer Intern(Aug 2024-Jan 2025)",
              img: "./exosystems.jpg",
              title: "Exosystems",
              desc: "During my tenure, I successfully built a CI/CD pipeline for exosystems.net and integrated secure authentication using Google, GitHub, and MetaMask logins. I explored JWT tokens and the Google Developer Console, enhancing both security and user experience. Additionally, I developed a GitHub dashboard that displays user-specific repository issues and statistics using the GitHub API, showcasing my ability to work with external services.",
            },
            {
              upper: "BackEnd Development TeamMember(Sep 2024-Present)",
              img: "./codechef.png",
              title: "CodeChef University Club",
              desc: "I contribute to this club as a Frontend as well as BackEnd Developer, crafting engaging and user-friendly interfaces that enhances the overall experience.I explored Golang and art of writing concurrent golang which helps build robust efficient backend systems.",
            },
            {
              upper: "Computer Science Engineering(2023-2027)",
              img: "./vit.jpg",
              title: "Vellore Institute Of Technology,Chennai",
              desc: " Currently pursuing a B.Tech in Computer Science (specialization in AI & Robotics) at Vellore Institute Of Technology, with expected graduation in . Key coursework includes Machine Learning, Computer Vision, and Autonomous Systems.",
            },
            {
              upper: "11th-12th CBSE(2022-2023)",
              img: "./alpine.png",
              title: "Alpine School,Bangalore",
              desc: "During my 11th-12th grade  at Alpine School, Bangalore (CBSE), I pursued Physics, Chemistry, Mathematics, and Computer Science, developing strong analytical and problem-solving skills. My consistent academic dedication culminated in scoring 94.6% in the 12th board examinations, with particular excellence in computational and logical subjects. This rigorous science curriculum laid the foundation for my pursuit of Computer Science with AI specialization at the undergraduate level.",
            },
          ].map((job, idx) => (
            <div key={idx} className={`${styles.box} ${styles[`box${idx + 1}`]}`}>
              <div className={styles.upper}>{job.upper}</div>
              <div className={styles.lower}>
                <div className={styles.side}>
                  <img src={job.img} alt={job.title} />
                  <h4>{job.title}</h4>
                </div>
                <div className={styles.side2}>{job.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id={styles.page3}></div>
    </main>
  );
}
