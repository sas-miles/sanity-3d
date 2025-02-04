/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["tile-plain-nb025"]: THREE.Mesh;
    ["tile-plain-nb027"]: THREE.Mesh;
    ["tile-plain-nb028"]: THREE.Mesh;
    ["tile-plain-nb030"]: THREE.Mesh;
    ["tile-road-straight-nb010"]: THREE.Mesh;
    ["tile-road-straight-nb010_1"]: THREE.Mesh;
    ["tile-road-straight-nb010_2"]: THREE.Mesh;
    ["tile-road-curve-nb002"]: THREE.Mesh;
    ["tile-road-curve-nb002_1"]: THREE.Mesh;
    ["tile-road-curve-nb002_2"]: THREE.Mesh;
    ["tile-plain-nb004"]: THREE.Mesh;
    ["tile-plain-nb004_1"]: THREE.Mesh;
    ["tile-road-straight-nb005"]: THREE.Mesh;
    ["tile-road-straight-nb005_1"]: THREE.Mesh;
    ["tile-road-straight-nb005_2"]: THREE.Mesh;
  };
  materials: {
    ["14 BROWN-LIGHTEST"]: THREE.MeshPhysicalMaterial;
    ["18 GREY-DARK"]: THREE.MeshPhysicalMaterial;
    ["21 GREY LIGHT"]: THREE.MeshPhysicalMaterial;
  };
};

export function GroundEvents(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/road-zone-events.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="tile-plain-nb025"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb025"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[-60, 2.667, -135]}
      />
      <mesh
        name="tile-plain-nb027"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb027"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[-30, 2.667, -135]}
      />
      <mesh
        name="tile-plain-nb028"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb028"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[0, 2.667, -135]}
      />
      <mesh
        name="tile-plain-nb030"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb030"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[30, 2.667, -135]}
      />
      <group
        name="road-straight-triple001"
        position={[0, 2.617, -105]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-straight-nb010"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb010"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb010_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb010_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb010_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb010_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
      </group>
      <group name="road-curved004" position={[-60, 2.667, -105]}>
        <mesh
          name="tile-road-curve-nb002"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb002"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-curve-nb002_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb002_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-curve-nb002_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb002_2"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
      </group>
      <group name="asphalt-double001" position={[-15, 2.667, -45]}>
        <mesh
          name="tile-plain-nb004"
          castShadow
          receiveShadow
          geometry={nodes["tile-plain-nb004"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-plain-nb004_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-plain-nb004_1"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
      </group>
      <group
        name="road-straight-double005"
        position={[-60, 2.617, -59.997]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="tile-road-straight-nb005"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb005"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb005_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb005_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb005_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb005_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/road-zone-events.glb");
