import { Center } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from 'three'
import { Perf } from 'r3f-perf'


import Lights from "./Lights"
import Effect from "./Effect"
import Emissions from "./Emissions"
import Ground from "./Ground"
import Modeles from "./Modeles"
import Reflection from "./Reflection"
import { Suspense } from "react"

export default function Experience()
{
    console.log('ere render');

    const {farNumber, near, fov} = useControls('camera', {
        farNumber:{
            min: 0,
            max: 1000,
            step: 1,
            value: 200
        },
        near:{
            min: 0,
            max: 100,
            step: 0.0001,
            value: 10
        },
        fov:{
            min: 30,
            max: 100,
            step: 0.001,
            value: 65
        }
    })
    useThree(({camera, gl})=>{
        camera.far = farNumber
        camera.near = near
        camera.fov = fov
        camera.updateProjectionMatrix()

        gl.outputEncoding = THREE.sRGBEncoding
        gl.antialias = false
    })
    return <>
        <color args={['#1d1b1b']} attach='background' />
        <Center>
            <group>
                <Perf position="top-left" />
                <Effect />
                <Suspense fallback={false}>
                    <Modeles />
                </Suspense>
                <Emissions />
                <Lights />
                <Suspense fallback={false}>
                    <Reflection />
                </Suspense>
                <Ground />
            </group>
        </Center>
    </>
}