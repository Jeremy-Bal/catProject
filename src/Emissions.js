import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Emissions()
{
    const { nodes } = useGLTF('./emission1.glb')

    const { color } = useControls({
        color: {
            value : [ 0.2, 2.4, 2.0 ],
            min: 0,
            max: 10,
            step: 0.1
        },
    })

    return <>
        <group>
            <ambientLight color={'#ffffff'} />

            <mesh geometry={nodes.darkOrangeEmission.geometry}>
                 <meshBasicMaterial color={ [ 1, 1, 5 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.blueEmission.geometry}>
                 <meshBasicMaterial color={[color[0], color[1], color[2]]} toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.greenEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.orangeEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.pinkEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.redEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.whiteEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.yellowEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
        </group>
    </>
}