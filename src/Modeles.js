import {useGLTF, useTexture } from "@react-three/drei"

export default function Modeles()
{
    console.log("re render");
    
    const [baked1, baked2, baked3] = useTexture(['./unwrap-1.jpg', './unwrap-2.jpg', './unwrap-3.jpg'])
    
    const [modele1, modele2, modele3] = useGLTF(['./baked-1.glb', './baked-2.glb', './baked-3.glb'])

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