"use client"
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 
import { useLayoutEffect, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import gsap from 'gsap';
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

export default function Home() {
  var path = `M 10 300 Q 500 290 990 300`;
  var finalPath = `M 10 300 Q 500 290 990 300`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var main = document.querySelector("#main");
    var cursor = document.querySelector("#cursor");
    var string = document.querySelector("#string");
    var title = document.querySelector("#title");
    var img1 = document.querySelector("#img1");
    var img2 = document.querySelector("#img2");
    var img3 = document.querySelector("#img3");

    const handleMouseEnter = () => gsap.to(cursor, { scale: 4 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 1 });

    title?.addEventListener("mouseenter", handleMouseEnter);
    title?.addEventListener("mouseleave", handleMouseLeave);
    img1?.addEventListener("mouseenter", handleMouseEnter);
    img1?.addEventListener("mouseleave", handleMouseLeave);
    img2?.addEventListener("mouseenter", handleMouseEnter);
    img2?.addEventListener("mouseleave", handleMouseLeave);
    img3?.addEventListener("mouseenter", handleMouseEnter);
    img3?.addEventListener("mouseleave", handleMouseLeave);

    gsap.to("#links #img1", {
      scale: 2,
      x: -300,
      duration: 1.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#links h2",
        scroller: "body",
        scrub: 5
      }
    });

    gsap.to("#links #img2", {
      scale: 1.5,
      x: 30,
      duration: 1.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#links h2",
        scroller: "body",
        scrub: 5
      }
    });

    gsap.to("#links #img3", {
      scale: 1.5,
      x: 320,
      duration: 1.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#links h2",
        scroller: "body",
        scrub: 5
      }
    });

    string?.addEventListener("mousemove", function(dets) {
      path = `M 10 300 Q ${dets.x} ${dets.y - 320} 990 300`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
      });
    });

    main?.addEventListener("mousemove", function(dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1
      });
    });

    string?.addEventListener("mouseleave", function() {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1, 0.2)"
      });
    });

    return () => {
      title?.removeEventListener("mouseenter", handleMouseEnter);
      title?.removeEventListener("mouseleave", handleMouseLeave);
      img1?.removeEventListener("mouseenter", handleMouseEnter);
      img1?.removeEventListener("mouseleave", handleMouseLeave);
      img2?.removeEventListener("mouseenter", handleMouseEnter);
      img2?.removeEventListener("mouseleave", handleMouseLeave);
      img3?.removeEventListener("mouseenter", handleMouseEnter);
      img3?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        

      }, containerRef);

      return () => ctx.revert();
    };

    initAnimations();
  }, []);

  return (
    <main id="main" className={montserrat.className} ref={containerRef}>
      <div id="page1">
        <Navbar />
        <div id="cursor"></div>
        <div id="title">Turning Ideas into Code: Portfolio of Karthik Anish Joseph</div>
        <div id="string">
          <svg width="1000" height="600">
            <path d="M 10 300 Q 500 290 990 300" stroke="white" fill="transparent" />
          </svg>
        </div>
      </div>
      <div id="page2">
        <div id="links">
          <h2  id="img1">
            <img width="80" height="80" src="https://img.icons8.com/ios-filled/100/learning.png" alt="learning"/>
            <p>Learning</p>
          </h2>
          <h2  id="img2">
            <img width="90" height="90" src="https://img.icons8.com/metro/52/console.png" alt="console"/>
            <p>Building</p>
          </h2>
          <h2  id="img3">
            <img width="90" height="90" src="https://img.icons8.com/dotty/80/bullish.png" alt="bullish"/>
            <p>Growing</p>
          </h2>
        </div>
      </div>
    </main>
  );
}
