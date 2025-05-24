'use client';

import React, { useEffect } from 'react';
import { Noto_Serif_Display } from '@next/font/google';
import Navbar from '../components/Navbar';
import styles from "./about.module.css"
import gsap from 'gsap';
const noto = Noto_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function InfiniteScroll() {
  useEffect(() => {
    var main = document.querySelector("#main");
    var cursor = document.querySelector(".cursor");
    main?.addEventListener("mousemove", function(dets) {
                gsap.to(cursor, {
                    x: dets.x,
                    y: dets.y,
                    duration: 1
                });
            });
    let scrollHeight = 0,
      scrollPos = 0,
      clonesHeight = 0,
      disableScroll = false,
      clones = [];

    const context = document.querySelector('.loop');
    const items = document.querySelectorAll('.loop_item');

    Array.from(items, (item) => {
      const clone = item.cloneNode(true);
      context?.appendChild(clone);
      clone.classList.add('clone_item');
    });

    const getScrollPos = () => {
      return (context as HTMLElement)?.scrollTop || 0;
    };

    const setScrollPos = (pos: number) => {
      if (context) (context as HTMLElement).scrollTop = pos;
    };

    const getClonesHeight = () => {
      clonesHeight = 0;
      Array.from(clones, (clone: any) => {
        clonesHeight += clone.offsetHeight;
      });
      return clonesHeight;
    };

    const reCalc = () => {
      scrollPos = getScrollPos();
      scrollHeight = (context as HTMLElement)?.scrollHeight;
      clonesHeight = getClonesHeight();

      if (scrollPos <= 0) {
        setScrollPos(1);
      }
    };

    const scrollUpdate = () => {
      if (!disableScroll) {
        scrollPos = getScrollPos();

        if (clonesHeight + scrollPos >= scrollHeight) {
          if (clonesHeight) setScrollPos(1);
          disableScroll = true;
        } else if (scrollPos <= 0) {
          setScrollPos(scrollHeight - clonesHeight);
          disableScroll = true;
        }
      }

      if (disableScroll) {
        setTimeout(() => {
          disableScroll = false;
        }, 40);
      }
    };

    clones = (context as HTMLElement)?.querySelectorAll('.clone_item') || [];
    reCalc();

    context?.addEventListener('scroll', () => {
      window.requestAnimationFrame(scrollUpdate);
    });

    window.addEventListener('resize', () => {
      window.requestAnimationFrame(reCalc);
    });

    return () => {
      context?.removeEventListener('scroll', () => {
        window.requestAnimationFrame(scrollUpdate);
      });

      window.removeEventListener('resize', () => {
        window.requestAnimationFrame(reCalc);
      });
    };
  }, []);

  const menuItem = [
    { id: 1, name: 'Playing Football & Swimming' },
    { id: 2, name: 'Linux Enthusiast (especially Fedora)' },
    { id: 3, name: 'Minimalist i3 Window Manager Fan' },
    { id: 4, name: 'Passionate about Rust Programming' },
    { id: 5, name: 'Golang is Awesome' },
    { id: 6, name: 'Love Reading Nonfiction & Tech Books' },
    { id: 7, name: 'Intrigued by Geopolitical Debates' },
    { id: 8, name: 'Fascinated by Data Structures & Algorithms' },
    { id: 9, name: 'I enjoy solving Leetcode & Codeforces problems' },
    { id: 10, name: 'Understanding Recursion deeply' },
    { id: 11, name: 'Graphs & Trees are my favorite DS topics' },
    { id: 12, name: 'DP problems give me a sense of achievement' },
    { id: 13, name: 'Exploring OS concepts like memory & scheduling' },
    { id: 14, name: 'Enthusiastic about Systems Programming' },
    { id: 15, name: 'CS Theory like Automata & Compilers interests me' },
    { id: 16, name: 'I like debugging and understanding stack traces' },
    { id: 17, name: 'Exploring backend architectures & APIs' },
    { id: 18, name: 'Always curious about how things work under the hood' },
    { id: 19, name: 'I write notes on topics I study to retain them better' },
    { id: 20, name: 'CS is not just a career path, it’s a mindset' },
  ];

  return (
    <main id="main">
     <div className='cursor' id={styles.cursor}></div>
      <Navbar />
      <div
        className={`${noto.className} bg-black text-white no-scrollbar loop w-screen h-screen relative overflow-auto flex flex-col items-end text-right select-none px-4 sm:px-6`}
      >
        {/* Left-side vertical "ABOUT ME" */}
        <div className="fixed left-[5%] sm:left-[2%] top-1/2 transform -translate-y-1/2 flex flex-col items-start z-10">
          {'ABOUT ME'.split('').map((char, i) => (
            <span
              key={i}
              className={`text-[6rem] md:text-[4rem] sm:text-[3rem] font-bold leading-[0.8] uppercase font-sans ${
                char === ' ' ? 'h-8' : 'text-red-600'
              }`}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Menu items */}
        {menuItem.map((el) => (
          <div
            key={el.id}
            className="loop_item relative p-4 mr-16 flex flex-col transition-transform duration-300 hover:translate-x-4 hover:italic hover:text-red-500 animate-fadeIn"
          >
            <span className="text-[2vh] font-light text-gray-400">({el.id})</span>
            <span className="text-[6vh] md:text-[4vh] sm:text-[3vh] font-medium cursor-pointer">
              {el.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default InfiniteScroll;
