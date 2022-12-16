import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function ()
{
    return <>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.7} />
        </EffectComposer>
{/* 
        <mesh castShadow position-y={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false } />
        </mesh> */}
    </>
}