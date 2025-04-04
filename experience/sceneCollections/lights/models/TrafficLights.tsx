/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['traffic-lights_1']: THREE.Mesh
    ['traffic-lights_2']: THREE.Mesh
    ['traffic-lights_3']: THREE.Mesh
    ['traffic-lights_4']: THREE.Mesh
    ['traffic-lights_5']: THREE.Mesh
    ['traffic-lights_1']: THREE.Mesh
    ['traffic-lights_2']: THREE.Mesh
    ['traffic-lights_3']: THREE.Mesh
    ['traffic-lights_4']: THREE.Mesh
    ['traffic-lights_5']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
    ['traffic-lights001']: THREE.Mesh
    ['traffic-lights001_1']: THREE.Mesh
    ['traffic-lights001_2']: THREE.Mesh
    ['traffic-lights001_3']: THREE.Mesh
    ['traffic-lights001_4']: THREE.Mesh
  }
  materials: {
    ['20 GREY.002']: THREE.MeshPhysicalMaterial
    ['17 GREY-DARKEST.009']: THREE.MeshPhysicalMaterial
    ['26 RED-DARK.001']: THREE.MeshPhysicalMaterial
    ['29 ORANGE-LIGHT']: THREE.MeshPhysicalMaterial
    ['36 GREEN']: THREE.MeshPhysicalMaterial
    ['20 GREY.001']: THREE.MeshPhysicalMaterial
    ['17 GREY-DARKEST.003']: THREE.MeshPhysicalMaterial
    ['26 RED-DARK.002']: THREE.MeshPhysicalMaterial
    ['29 ORANGE-LIGHT.001']: THREE.MeshPhysicalMaterial
    ['36 GREEN.001']: THREE.MeshPhysicalMaterial
  }
}

export function TrafficLights(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/models/traffic-lights.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="traffic-lights" position={[-55.431, 2.667, 67.521]} rotation={[0, 1.571, 0]}>
          <mesh
            name="traffic-lights_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_1'].geometry}
            material={materials['20 GREY.002']}
          />
          <mesh
            name="traffic-lights_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_2'].geometry}
            material={materials['17 GREY-DARKEST.009']}
          />
          <mesh
            name="traffic-lights_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_3'].geometry}
            material={materials['26 RED-DARK.001']}
          />
          <mesh
            name="traffic-lights_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_4'].geometry}
            material={materials['29 ORANGE-LIGHT']}
          />
          <mesh
            name="traffic-lights_5"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_5'].geometry}
            material={materials['36 GREEN']}
          />
        </group>
        <group
          name="traffic-lights002"
          position={[-64.123, 2.667, 67.205]}
          rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="traffic-lights_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_1'].geometry}
            material={materials['20 GREY.002']}
          />
          <mesh
            name="traffic-lights_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_2'].geometry}
            material={materials['17 GREY-DARKEST.009']}
          />
          <mesh
            name="traffic-lights_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_3'].geometry}
            material={materials['26 RED-DARK.001']}
          />
          <mesh
            name="traffic-lights_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_4'].geometry}
            material={materials['29 ORANGE-LIGHT']}
          />
          <mesh
            name="traffic-lights_5"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights_5'].geometry}
            material={materials['36 GREEN']}
          />
        </group>
        <group name="traffic-lights003" position={[36.988, 2.667, 36.086]} rotation={[0, 1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
        <group
          name="traffic-lights004"
          position={[24.964, 2.667, 82.089]}
          rotation={[0, -1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
        <group
          name="traffic-lights005"
          position={[-55.221, 2.667, -19.296]}
          rotation={[0, 1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
        <group
          name="traffic-lights006"
          position={[-35.139, 2.667, 82.03]}
          rotation={[0, -1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
        <group name="traffic-lights007" position={[34.72, 2.667, -19.296]} rotation={[0, 1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
        <group
          name="traffic-lights008"
          position={[24.767, 2.667, -10.849]}
          rotation={[0, -1.571, 0]}>
          <mesh
            name="traffic-lights001"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001'].geometry}
            material={materials['20 GREY.001']}
          />
          <mesh
            name="traffic-lights001_1"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_1'].geometry}
            material={materials['17 GREY-DARKEST.003']}
          />
          <mesh
            name="traffic-lights001_2"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_2'].geometry}
            material={materials['26 RED-DARK.002']}
          />
          <mesh
            name="traffic-lights001_3"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_3'].geometry}
            material={materials['29 ORANGE-LIGHT.001']}
          />
          <mesh
            name="traffic-lights001_4"
            castShadow
            receiveShadow
            geometry={nodes['traffic-lights001_4'].geometry}
            material={materials['36 GREEN.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/traffic-lights.glb')
