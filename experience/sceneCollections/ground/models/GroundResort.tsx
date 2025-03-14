/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['tile-plain-nb026']: THREE.Mesh
    ['tile-plain-nb081']: THREE.Mesh
    ['hotel-front']: THREE.Mesh
    ['tile-golf-green-nb_1']: THREE.Mesh
    ['tile-golf-green-nb_2']: THREE.Mesh
    ['tile-golf-green-nb_3']: THREE.Mesh
    ['tile-golf-green-nb_1']: THREE.Mesh
    ['tile-golf-green-nb_2']: THREE.Mesh
    ['tile-golf-green-nb_3']: THREE.Mesh
    ['tile-golf-sand-nb_1']: THREE.Mesh
    ['tile-golf-sand-nb_2']: THREE.Mesh
    ['tile-hill-corner-nb']: THREE.Mesh
    ['tile-hill-corner-nb001']: THREE.Mesh
    ['tile-hill-corner-nb002']: THREE.Mesh
    ['tile-hill-curve-nb']: THREE.Mesh
    ['tile-hill-curve-nb001']: THREE.Mesh
    ['tile-hill-nb']: THREE.Mesh
    ['tile-hill-nb001']: THREE.Mesh
    ['tile-hill-valley-nb']: THREE.Mesh
    ['tile-hill-valley-nb001']: THREE.Mesh
    ['tile-plain-nb068']: THREE.Mesh
    ['parking-lines']: THREE.Mesh
    ['parking-lot']: THREE.Mesh
    ['tile-road-straight-nb004']: THREE.Mesh
    ['tile-road-straight-nb004_1']: THREE.Mesh
    ['tile-road-straight-nb004_2']: THREE.Mesh
    ['tile-road-end-nb001']: THREE.Mesh
    ['tile-road-end-nb001_1']: THREE.Mesh
    ['tile-road-end-nb001_2']: THREE.Mesh
  }
  materials: {
    ['14 BROWN-LIGHTEST.002']: THREE.MeshPhysicalMaterial
    ['21 GREY LIGHT']: THREE.MeshPhysicalMaterial
    ['36 GREEN']: THREE.MeshPhysicalMaterial
    ['9 BROWN-DARKEST.002']: THREE.MeshPhysicalMaterial
    ['37 GREEN-LIGHT.002']: THREE.MeshPhysicalMaterial
    ['14 BROWN-LIGHTEST']: THREE.MeshPhysicalMaterial
    ['material_3.002']: THREE.MeshStandardMaterial
    ['18 GREY-DARK']: THREE.MeshPhysicalMaterial
    ['14 BROWN-LIGHTEST.003']: THREE.MeshPhysicalMaterial
    ['18 GREY-DARK.003']: THREE.MeshPhysicalMaterial
    ['21 GREY LIGHT.009']: THREE.MeshPhysicalMaterial
    ['18 GREY-DARK.004']: THREE.MeshPhysicalMaterial
    ['21 GREY LIGHT.010']: THREE.MeshPhysicalMaterial
    ['14 BROWN-LIGHTEST.004']: THREE.MeshPhysicalMaterial
  }
}

export function GroundResort(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/models/road-zone-resort.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="tile-plain-nb026"
          castShadow
          receiveShadow
          geometry={nodes['tile-plain-nb026'].geometry}
          material={materials['14 BROWN-LIGHTEST.002']}
          position={[-90, 2.667, -135]}
        />
        <mesh
          name="tile-plain-nb081"
          castShadow
          receiveShadow
          geometry={nodes['tile-plain-nb081'].geometry}
          material={materials['14 BROWN-LIGHTEST.002']}
          position={[-179.939, 2.667, -15]}
        />
        <mesh
          name="hotel-front"
          castShadow
          receiveShadow
          geometry={nodes['hotel-front'].geometry}
          material={materials['21 GREY LIGHT']}
          position={[-90, 2.667, -75]}
        />
        <group name="tile-golf-green-nb" position={[-180, 8.68, -75]}>
          <mesh
            name="tile-golf-green-nb_1"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_1'].geometry}
            material={materials['36 GREEN']}
          />
          <mesh
            name="tile-golf-green-nb_2"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_2'].geometry}
            material={materials['9 BROWN-DARKEST.002']}
          />
          <mesh
            name="tile-golf-green-nb_3"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_3'].geometry}
            material={materials['37 GREEN-LIGHT.002']}
          />
        </group>
        <group name="tile-golf-green-nb001" position={[-90, 2.652, -45]}>
          <mesh
            name="tile-golf-green-nb_1"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_1'].geometry}
            material={materials['36 GREEN']}
          />
          <mesh
            name="tile-golf-green-nb_2"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_2'].geometry}
            material={materials['9 BROWN-DARKEST.002']}
          />
          <mesh
            name="tile-golf-green-nb_3"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-green-nb_3'].geometry}
            material={materials['37 GREEN-LIGHT.002']}
          />
        </group>
        <group name="tile-golf-sand-nb" position={[-180, 8.68, -105]}>
          <mesh
            name="tile-golf-sand-nb_1"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-sand-nb_1'].geometry}
            material={materials['36 GREEN']}
          />
          <mesh
            name="tile-golf-sand-nb_2"
            castShadow
            receiveShadow
            geometry={nodes['tile-golf-sand-nb_2'].geometry}
            material={materials['14 BROWN-LIGHTEST']}
          />
        </group>
        <mesh
          name="tile-hill-corner-nb"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-corner-nb'].geometry}
          material={materials['36 GREEN']}
          position={[-120, 2.68, -105]}
        />
        <mesh
          name="tile-hill-corner-nb001"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-corner-nb001'].geometry}
          material={materials['36 GREEN']}
          position={[-120, 2.676, -45]}
        />
        <mesh
          name="tile-hill-corner-nb002"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-corner-nb002'].geometry}
          material={materials['36 GREEN']}
          position={[-210, 2.68, -45]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          name="tile-hill-curve-nb"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-curve-nb'].geometry}
          material={materials['36 GREEN']}
          position={[-150, 2.68, -75]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          name="tile-hill-curve-nb001"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-curve-nb001'].geometry}
          material={materials['36 GREEN']}
          position={[-210, 2.68, -75]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="tile-hill-nb"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-nb'].geometry}
          material={materials['36 GREEN']}
          position={[-150, 2.68, -45]}
        />
        <mesh
          name="tile-hill-nb001"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-nb001'].geometry}
          material={materials['36 GREEN']}
          position={[-180, 2.68, -45]}
        />
        <mesh
          name="tile-hill-valley-nb"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-valley-nb'].geometry}
          material={materials['36 GREEN']}
          position={[-150, 2.68, -105]}
        />
        <mesh
          name="tile-hill-valley-nb001"
          castShadow
          receiveShadow
          geometry={nodes['tile-hill-valley-nb001'].geometry}
          material={materials['36 GREEN']}
          position={[-210, 2.68, -105]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="tile-plain-nb068"
          castShadow
          receiveShadow
          geometry={nodes['tile-plain-nb068'].geometry}
          material={materials['36 GREEN']}
          position={[-90, 2.667, -105]}
        />
        <mesh
          name="parking-lines"
          castShadow
          receiveShadow
          geometry={nodes['parking-lines'].geometry}
          material={materials['material_3.002']}
          position={[-87.892, 2.734, -5.438]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.026}
        />
        <mesh
          name="parking-lot"
          castShadow
          receiveShadow
          geometry={nodes['parking-lot'].geometry}
          material={materials['18 GREY-DARK']}
          position={[-90, 2.667, -15]}
        />
        <group
          name="tile-road-straight-nb022"
          position={[-119.939, 2.667, -15]}
          rotation={[0, Math.PI / 2, 0]}>
          <mesh
            name="tile-road-straight-nb004"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-straight-nb004'].geometry}
            material={materials['14 BROWN-LIGHTEST.003']}
          />
          <mesh
            name="tile-road-straight-nb004_1"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-straight-nb004_1'].geometry}
            material={materials['18 GREY-DARK.003']}
          />
          <mesh
            name="tile-road-straight-nb004_2"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-straight-nb004_2'].geometry}
            material={materials['21 GREY LIGHT.009']}
          />
        </group>
        <group
          name="tile-road-end-nb005"
          position={[-149.939, 2.667, -15]}
          rotation={[0, Math.PI / 2, 0]}>
          <mesh
            name="tile-road-end-nb001"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-end-nb001'].geometry}
            material={materials['18 GREY-DARK.004']}
          />
          <mesh
            name="tile-road-end-nb001_1"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-end-nb001_1'].geometry}
            material={materials['21 GREY LIGHT.010']}
          />
          <mesh
            name="tile-road-end-nb001_2"
            castShadow
            receiveShadow
            geometry={nodes['tile-road-end-nb001_2'].geometry}
            material={materials['14 BROWN-LIGHTEST.004']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/road-zone-resort.glb')
