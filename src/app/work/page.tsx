"use client"; // This is crucial for R3F components
import Scene from '../components/Scene';
import { Montserrat } from 'next/font/google';
import styles from './work.module.css'
import Navbar from '../components/Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bloom, ToneMapping } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });
export default function Work() {

  return (
    <main className={montserrat.className}>
      <div  id={styles.page1}>
        <Navbar/>
        <h1>Work And Projects</h1>
        <Canvas flat camera={{fov:45}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight/>
            <Scene/>
            <EffectComposer>

<Bloom
    intensity={12.0} // The bloom intensity.
    luminanceThreshold={0}// luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
    mipmapBlur // Enables or disables mipmap blur.
  />
 
</EffectComposer>

        </Canvas>
        
      </div>
      <div id={styles.page2}></div>
      <div id={styles.page3}></div>
    </main>
  );
}