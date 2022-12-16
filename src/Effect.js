import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function ()
{
    return <>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.7} luminanceThreshold={0.6}/>
        </EffectComposer>
    </>
}