"use client";
import styles from './contact.module.css';
import Navbar from '../components/Navbar';
import { Montserrat } from 'next/font/google';
import gsap from 'gsap';
import { useEffect } from 'react';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });
export default function SplitPage() {
    useEffect(()=>{
        var main = document.querySelector("#main");
        var cursor = document.querySelector(".cursor");
        main?.addEventListener("mousemove", function(dets) {
              gsap.to(cursor, {
                x: dets.x,
                y: dets.y,
                duration: 1
              });
            });
        
    },[]);
  return (
    <main id="main" className={montserrat.className}>
        <div className='cursor' id={styles.cursor}></div>
    <div className={styles.container}>
        <Navbar/>
        
      <div className={styles.leftSide}>
        <div></div>
        <h2 className={styles.heading}>my</h2>
        <h1 className={styles.heading}>Socials</h1>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.heading}>my</h2>
        <h1 className={styles.heading}>Emails</h1>
      </div>
    </div>
    </main>
  );
}