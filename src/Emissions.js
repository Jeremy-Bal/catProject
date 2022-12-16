import { useGLTF } from "@react-three/drei"

export default function Emissions()
{
    const { nodes } = useGLTF('./emission1.glb')
    
    return <>
        <group>
            <ambientLight color={'#ffffff'} />

            <mesh geometry={nodes.darkOrangeEmission.geometry}>
                <meshStandardMaterial color={'#FF5836'} emissive={'#FF5836'} toneMapped={ false } emissiveIntensity={10} />
            </mesh>
            
            <mesh geometry={nodes.blueEmission.geometry}>
                <meshStandardMaterial color={'#99C9FF'} emissive={'#99C9FF'} toneMapped={ false } emissiveIntensity={1.2} />
            </mesh>
            
            <mesh geometry={nodes.greenEmission.geometry}>
                <meshStandardMaterial color={'#008F08'} emissive={'#008F08'} toneMapped={ false } emissiveIntensity={20} />
            </mesh>
            
            <mesh geometry={nodes.orangeEmission.geometry}>
                <meshStandardMaterial color={'#FF9964'} emissive={'#FF9964'} toneMapped={ false } emissiveIntensity={2} />
            </mesh>
            
            <mesh geometry={nodes.pinkEmission.geometry}>
                <meshStandardMaterial color={'#FC7BFF'} emissive={'#FC7BFF'} toneMapped={ false } emissiveIntensity={3} />
            </mesh>
            
            <mesh geometry={nodes.redEmission.geometry}>
                <meshStandardMaterial color={'#B92223'} emissive={'#B92223'} toneMapped={ false } emissiveIntensity={10} />
            </mesh>
            
            <mesh geometry={nodes.whiteEmission.geometry}>
                <meshStandardMaterial color={'#E3E3E3'} emissive={'#E3E3E3'} toneMapped={ false } emissiveIntensity={3} />
            </mesh>
            
            <mesh geometry={nodes.yellowEmission.geometry}>
                <meshStandardMaterial color={'#E1D22A'} emissive={'#E1D22A'} toneMapped={ false } emissiveIntensity={10} />
            </mesh>
        </group>
    </>
}