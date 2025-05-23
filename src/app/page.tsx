"use client";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLHeadingElement>(null);
  const img2Ref = useRef<HTMLHeadingElement>(null);
  const img3Ref = useRef<HTMLHeadingElement>(null);

  const pathStart = `M 10 300 Q 500 290 990 300`;
  let rafId: number | null = null;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cursor = cursorRef.current;
    const string = stringRef.current;
    const title = titleRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    document.addEventListener("mousemove", moveCursor);

    const handleMouseEnter = () => gsap.to(cursor, { scale: 4 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 1 });

    [title, img1, img2, img3].forEach((el) => {
      el?.addEventListener("mouseenter", handleMouseEnter);
      el?.addEventListener("mouseleave", handleMouseLeave);
    });

    // Throttle path animation
    const handlePathMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const path = `M 10 300 Q ${e.clientX} ${e.clientY - 320} 990 300`;
        gsap.to("svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
        rafId = null;
      });
    };

    string?.addEventListener("mousemove", handlePathMove);

    string?.addEventListener("mouseleave", () => {
      gsap.to("svg path", {
        attr: { d: pathStart },
        duration: 0.8,
        ease: "elastic.out(1, 0.2)",
      });
    });

    // ScrollTrigger animations
    [img1, img2, img3].forEach((img) => {
      gsap.to(img, {
        scale: 2,
        duration: 1.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: "#links h2",
          scroller: "body",
          scrub: 1,
        },
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      [title, img1, img2, img3].forEach((el) => {
        el?.removeEventListener("mouseenter", handleMouseEnter);
        el?.removeEventListener("mouseleave", handleMouseLeave);
      });
      string?.removeEventListener("mousemove", handlePathMove);
      cancelAnimationFrame(rafId || 0);
    };
  }, []);

  useLayoutEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Future scoped animations can go here
      }, containerRef);

      return () => ctx.revert();
    };

    initAnimations();
  }, []);

  return (
    <main id="main" className={montserrat.className} ref={containerRef}>
      <div id="page1">
        <Navbar />
        <div id="cursor" ref={cursorRef}></div>
        <div id="title" ref={titleRef}>
          Turning Ideas into Code: Portfolio of Karthik Anish Joseph
        </div>
        <div id="string" ref={stringRef}>
          <svg width="1000" height="600">
            <path d="M 10 300 Q 500 290 990 300" stroke="white" fill="transparent" />
          </svg>
        </div>
      </div>
      <div id="page2">
        <div id="links">
          <h2 id="img1" ref={img1Ref}>
            &#x2022; Learning
          </h2>
          <h2 id="img2" ref={img2Ref}>
            &#x2022; Building
          </h2>
          <h2 id="img3" ref={img3Ref}>
            &#x2022; Growing
          </h2>
        </div>
      </div>
    </main>
  );
}
