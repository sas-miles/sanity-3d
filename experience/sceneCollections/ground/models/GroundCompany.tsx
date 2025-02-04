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
    ["tile-road-intersection-t-nb003"]: THREE.Mesh;
    ["tile-road-intersection-t-nb003_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb003_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb003_3"]: THREE.Mesh;
    ["tile-road-intersection-nb001_1"]: THREE.Mesh;
    ["tile-road-intersection-nb001_2"]: THREE.Mesh;
    ["tile-road-intersection-nb001_3"]: THREE.Mesh;
    ["tile-road-intersection-nb001_4"]: THREE.Mesh;
    ["tile-road-intersection-t-nb005"]: THREE.Mesh;
    ["tile-road-intersection-t-nb005_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb005_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb005_3"]: THREE.Mesh;
    ["tile-road-intersection-t-nb007_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb007_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb007_3"]: THREE.Mesh;
    ["tile-road-intersection-t-nb007_4"]: THREE.Mesh;
  };
  materials: {
    ["18 GREY-DARK.003"]: THREE.MeshPhysicalMaterial;
    ["21 GREY LIGHT.006"]: THREE.MeshPhysicalMaterial;
    ["23 GREY-WHITE.006"]: THREE.MeshPhysicalMaterial;
    ["14 BROWN-LIGHTEST.004"]: THREE.MeshPhysicalMaterial;
  };
};

export function GroundCompany(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/road-zone-company.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="tile-road-intersection-t-nb008" position={[30, 2.667, -15]}>
        <mesh
          name="tile-road-intersection-t-nb003"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb003"].geometry}
          material={materials["18 GREY-DARK.003"]}
        />
        <mesh
          name="tile-road-intersection-t-nb003_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb003_1"].geometry}
          material={materials["21 GREY LIGHT.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb003_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb003_2"].geometry}
          material={materials["23 GREY-WHITE.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb003_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb003_3"].geometry}
          material={materials["14 BROWN-LIGHTEST.004"]}
        />
      </group>
      <group name="tile-road-intersection-nb001" position={[-60, 2.667, -15]}>
        <mesh
          name="tile-road-intersection-nb001_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-nb001_1"].geometry}
          material={materials["18 GREY-DARK.003"]}
        />
        <mesh
          name="tile-road-intersection-nb001_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-nb001_2"].geometry}
          material={materials["21 GREY LIGHT.006"]}
        />
        <mesh
          name="tile-road-intersection-nb001_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-nb001_3"].geometry}
          material={materials["23 GREY-WHITE.006"]}
        />
        <mesh
          name="tile-road-intersection-nb001_4"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-nb001_4"].geometry}
          material={materials["14 BROWN-LIGHTEST.004"]}
        />
      </group>
      <group
        name="tile-road-intersection-t-nb009"
        position={[30, 2.667, 45]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-intersection-t-nb005"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb005"].geometry}
          material={materials["18 GREY-DARK.003"]}
        />
        <mesh
          name="tile-road-intersection-t-nb005_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb005_1"].geometry}
          material={materials["21 GREY LIGHT.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb005_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb005_2"].geometry}
          material={materials["23 GREY-WHITE.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb005_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb005_3"].geometry}
          material={materials["14 BROWN-LIGHTEST.004"]}
        />
      </group>
      <group
        name="tile-road-intersection-t-nb007"
        position={[-60, 2.667, 15]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-intersection-t-nb007_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb007_1"].geometry}
          material={materials["18 GREY-DARK.003"]}
        />
        <mesh
          name="tile-road-intersection-t-nb007_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb007_2"].geometry}
          material={materials["21 GREY LIGHT.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb007_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb007_3"].geometry}
          material={materials["23 GREY-WHITE.006"]}
        />
        <mesh
          name="tile-road-intersection-t-nb007_4"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-intersection-t-nb007_4"].geometry}
          material={materials["14 BROWN-LIGHTEST.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/road-zone-company.glb");
