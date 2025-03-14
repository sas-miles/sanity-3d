/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useVideoTexture, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['road-sign-green']: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
  }
  materials: {
    ['20 GREY']: THREE.MeshPhysicalMaterial
    ['17 GREY-DARKEST']: THREE.MeshPhysicalMaterial
    Screen: THREE.MeshStandardMaterial
    videoTexture: THREE.MeshBasicMaterial
  }
}

export function Billboard(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/models/billboard.glb") as GLTFResult;
  const lightRef = useRef<THREE.RectAreaLight>(null!);

  const videoTexture = useVideoTexture("/videos/loop-1.mp4");
  videoTexture.flipY = false;
  materials.videoTexture = new THREE.MeshBasicMaterial({ map: videoTexture });
  
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="road-sign-green"
          castShadow
          receiveShadow
          geometry={nodes['road-sign-green'].geometry}
          material={materials['20 GREY']}
          position={[0, 0.027, -0.001]}
          scale={0.804}
        />
        <group name="Cube" position={[0, 7.867, -0.003]} scale={[5.14, 2.891, 0.223]}>
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials['20 GREY']}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials['17 GREY-DARKEST']}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials.videoTexture}
          />
          <rectAreaLight
            ref={lightRef}
            name="Light"
            position={[0, .5, 15]}
            rotation={[-1.5, 0, 0]}
            width={14}
            height={10}
            intensity={5}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models/billboard.glb");
