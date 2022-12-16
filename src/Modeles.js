import {useGLTF, useTexture } from "@react-three/drei"
import { useEffect } from "react"

export default function Modeles()
{
    
    const modele1 = useGLTF('./baked-1.glb')
    const baked1 = useTexture('./unwrap-1.jpg')

    const modele2 = useGLTF('./baked-2.glb')
    const baked2 = useTexture('./unwrap-2.jpg')

    const modele3 = useGLTF('./baked-3.glb')
    const baked3 = useTexture('./unwrap-3.jpg')
    
    // useEffect(()=>{
    //     modele1 = useGLTF('./baked-1.glb')
    //     baked1 = useTexture('./unwrap-1.jpg')
    
    //     modele2 = useGLTF('./baked-2.glb')
    //     baked2 = useTexture('./unwrap-2.jpg')
    
    //     modele3 = useGLTF('./baked-3.glb')
    //     baked3 = useTexture('./unwrap-3.jpg')
    // }, [])

    return <>
        <mesh geometry={modele1.nodes.baked.geometry}>
            <meshBasicMaterial map={baked1} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele2.nodes.baked.geometry}>
            <meshBasicMaterial map={baked2} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele3.nodes.baked.geometry}>
            <meshBasicMaterial map={baked3} map-flipY="false"/>
        </mesh>
    </>
}