"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
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
  useEffect(() => {
    const main = document.querySelector("#main");
    const cursor = document.querySelector(".cursor");
    const title = document.querySelector("#h1");
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to("#marque",{
        transform: 'translateX(-200%)',
        ease: "none",
        duration:4,
        repeat:-1
    })
    gsap.to("#marque img",{
        rotate:180
    })
        }
        else{
            gsap.to("#marque",{
        transform: 'translateX(0%)',
        ease: "none",
        duration:4,
        repeat:-1
    })
     gsap.to("#marque img",{
        rotate:0
    })
        }
    })
    title?.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 4
      });
    });

    title?.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 1
      });
    });

    main?.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1
      });
    });
  }, []);

  return (
    <main id="main" className={montserrat.className}>
      <div className="cursor" id={styles.cursor}></div>
      <div id={styles.page1}>
        <Navbar />
        <h1 id="h1">Work And Projects</h1>
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
            <div  id="marque" className={styles.marque}>
                <h2>CODE DEBUG DEPLOY</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
            <div  id="marque"className={styles.marque}>
                <h2>CODE DEBUG DEPLOY</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
            <div  id="marque"className={styles.marque}>
                <h2>CODE DEBUG DEPLOY</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
            <div id="marque" className={styles.marque}>
                <h2>CODE DEBUG DEPLOY</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
            <div id="marque"className={styles.marque}>
                <h2>CODE DEBUG DEPLOY</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
        </div>
      </div>
      <div id={styles.page2}></div>
      <div id={styles.page3}></div>
    </main>
  );
}
