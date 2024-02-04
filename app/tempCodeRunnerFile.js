'use client'
import { OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('taimoor');
 
  return (
    <div className='text-4xl bg-red-300 h-screen font-bold'>
     <Canvas className='w-screen h-screen '>
      <Physics>
        <RigidBody>
      <Rotate/>

        </RigidBody>
        <RigidBody type='fixed'>
     <Ground/>

        </RigidBody>
      </Physics>
     </Canvas>
    </div>
     )
}
const Rotate = () => {
  const ref = useRef();

  useFrame(()=>{
    // ref.current.rotation.x += 0.01
    // ref.current.position.y -= 0.01
  })
  return(
    <>
       <mesh ref={ref}>
    <sphereGeometry args={[2]}/>
    <meshNormalMaterial/>
  </mesh>
  <OrbitControls/>
    </>
 
  )
}
const Ground = () => {
  return(
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <boxGeometry args={[10,10, 0.1]}/>
      <meshBasicMaterial color={'lime'}/> 
    </mesh>
  )
}
