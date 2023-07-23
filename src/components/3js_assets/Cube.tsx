import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from 'react';
import { Mesh } from "three";


export function Cube(props: any) {

  const [ref, api] = useBox(()=>({mass: 1, ...props}), useRef<Mesh>(null))
  
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3)
  //   api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0)
  // })

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)


  return (
    <mesh
      castShadow
      position={props.position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )

}