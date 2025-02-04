/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";
import { ThreeElements } from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
    ["tile-plain-nb012"]: THREE.Mesh;
    ["tile-plain-nb029"]: THREE.Mesh;
    ["tile-road-straight-nb"]: THREE.Mesh;
    ["tile-road-straight-nb_1"]: THREE.Mesh;
    ["tile-road-straight-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_3"]: THREE.Mesh;
  };
  materials: {
    ["14 BROWN-LIGHTEST"]: THREE.MeshPhysicalMaterial;
    ["18 GREY-DARK"]: THREE.MeshPhysicalMaterial;
    ["21 GREY LIGHT"]: THREE.MeshPhysicalMaterial;
    ["23 GREY-WHITE"]: THREE.MeshPhysicalMaterial;
  };
};

export function GroundConstruction(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/road-zone-construction.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="tile-plain-nb012"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb012"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[90, 2.667, -135]}
      />
      <mesh
        name="tile-plain-nb029"
        castShadow
        receiveShadow
        geometry={nodes["tile-plain-nb029"].geometry}
        material={materials["14 BROWN-LIGHTEST"]}
        position={[60, 2.667, -135]}
      />
      <group
        name="tile-road-straight-nb005"
        position={[60, 2.667, -75]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="tile-road-straight-nb"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
      </group>
      <group name="road-intersection-one007" position={[60, 2.667, -105]}>
        <mesh
          name="tile-road-intersection-t-nb"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-intersection-t-nb_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb_1"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-intersection-t-nb_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb_2"].geometry}
          material={materials["23 GREY-WHITE"]}
        />
        <mesh
          name="tile-road-intersection-t-nb_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb_3"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/road-zone-construction.glb");
