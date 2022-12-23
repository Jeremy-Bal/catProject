import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience'
import { Leva } from 'leva'

import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed />
        
        <Canvas
            camera={{
                position: [ 30, 30, 30 ]
            }}
            dpr={[1, 2]}>

            <OrbitControls minDistance={80} />
            <Experience />
        </Canvas>
        
        <Loader />
    </> 
)