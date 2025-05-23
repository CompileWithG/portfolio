"use client";
import styles from './contact.module.css';
import Navbar from '../components/Navbar';
import { Montserrat } from 'next/font/google';
import gsap from 'gsap';
import { useEffect } from 'react';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700', '900'] 
});

export default function SplitPage() {
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
        
    }, []);

    // List data with SVG components
    const leftTopItems = [
        {
            link:"https://www.instagram.com/karthicxxz?igsh=MXB5c3NkZ2JqamJlbQ==",
            name: 'Instagram',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        },
        {
            link:"https://github.com/CompileWithG",
            name: 'GitHub',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        }
    ];

    const leftBottomItems = [
        {
            link:"https://www.linkedin.com/in/karthik-anish-482464294/",
            name: 'LinkedIn',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        {
            link:"https://x.com/Karthik_Anish_J?t=XqWgFTrHesjDVMqOYZhyVw&s=09",
            name: 'Twitter',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
            )
        }
    ];

    const rightTopItems = [{name:"Student Email",
        link:"mailto:karthikanish.joseph2023@vitstudent.ac.in"
    },{
        name:"Personal Email",
        link:"mailto:codewithkarthikg@gmail.com"
    }];
    const rightBottomItems = [{
        name:"Alternative Email 1",
        link:"mailto:karthikanishjoseph@gmail.com"
    }, {
        name:"Alternative Email 2",
        link:"mailto:surgexd232@gmail.com"
    }];

    return (
        <main id="main" className={montserrat.className}>
            <div className='cursor' id={styles.cursor}></div>
            <div className={styles.container}>
                <Navbar/>
                
                {/* Left Side */}
                <div className={styles.leftSide}>
                    <div className={styles.listContainer}>
                        <ul className={styles.topList}>
                            {leftTopItems.map((item, index) => (
                                <li key={`left-top-${index}`} className={styles.listItem}>
                                    <div className={styles.svgContainer}>
                                        {item.svg}
                                    </div>
                                    <span onClick={() => window.open(item.link, '_blank')}>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={styles.headingContainer}>
                        <div className={styles.ha1}>
                            
                            <h1 className={styles.mainHeading}>Socials</h1>
                        </div>
                    </div>
                    
                    <div className={styles.listContainer}>
                        <ul className={styles.bottomList}>
                            {leftBottomItems.map((item, index) => (
                                <li key={`left-bottom-${index}`} className={styles.listItem}>
                                    <div className={styles.svgContainer}>
                                        {item.svg}
                                    </div>
                                    <span onClick={() => window.open(item.link, '_blank')}>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side */}
                <div className={styles.rightSide}>
                    <div className={styles.listContainer}>
                        <ul className={styles.topList}>
                            {rightTopItems.map((item, index) => (
                                <li key={`right-top-${index}`} className={styles.listItem}>
                                  <p onClick={() => window.open(item.link, '_blank')}>  {item.name} </p>                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={styles.headingContainer}>
                        <div className={styles.ha1}>
                            
                            <h1 className={styles.mainHeading}>Emails</h1>
                        </div>
                    </div>
                    
                    <div className={styles.listContainer}>
                        <ul className={styles.bottomList}>
                            {rightBottomItems.map((item, index) => (
                                <li key={`right-bottom-${index}`} className={styles.listItem}>
                                   <p onClick={() => window.open(item.link, '_blank')}> {item.name}</p>                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}