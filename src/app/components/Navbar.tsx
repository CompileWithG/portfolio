"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}><Link href="/">Karthik Anish Joseph</Link></h2>
      <div className={styles.pages}>
        <h4><Link href="/work">Work</Link></h4>
        <h4><Link href="/about">About</Link></h4>
        <h4><Link href="/contact">Contact</Link></h4>
      </div>
    </nav>
  );
}