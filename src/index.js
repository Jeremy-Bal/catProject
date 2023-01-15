import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { Leva } from 'leva'

import * as THREE from 'three'

import Experience from './Experience'

import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed />

        <Canvas
            camera={{
                position: [ 125, 100, 100 ],
                near: 10,
                far: 200,
                fov: 50
            }}
            dpr={[1, 2]}
            gl={{
                antialias: false,
                outputEncoding: THREE.sRGBEncoding
            }}>
            <Experience />

        </Canvas>

        <Loader />
    </>
)