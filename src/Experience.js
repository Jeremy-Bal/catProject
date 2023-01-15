import { Center, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { Suspense } from "react"
import * as THREE from 'three'

import Lights from "./Lights"
import Effect from "./Effect"
import Emissions from "./Emissions"
import Ground from "./Ground"
import Modeles from "./Modeles"
import Reflection from "./Reflection"

export default function Experience()
{
    var orbitChange = false
    const finalPosition = new THREE.Vector3(90, 40, 50)

    useFrame(({ camera })=>{
        if(orbitChange === false || camera.position.x > 81)
        {
            camera.position.lerp(finalPosition, 0.015)
        }
    })

    return <>

        <color args={['#1d1b1b']} attach='background' />
        <fog attach="fog" args={['#1d1b1b', window.innerWidth <= 800 ? 120 : 130, 250]} />

        <Center>
            <group>
                <OrbitControls onStart={ ()=>orbitChange = true } />

                <Suspense fallback={null}>
                    <Modeles />
                    <Ground />
                    <Effect />
                    <Emissions />
                    <Lights />
                    <Reflection />
                    {/* <Perf position="top-left" /> */}
                </Suspense>
            </group>
        </Center>
    </>
}