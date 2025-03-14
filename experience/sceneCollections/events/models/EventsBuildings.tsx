/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import type * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    ["tent-party007"]: THREE.Mesh;
    ["tent-party007_1"]: THREE.Mesh;
    ["tent-party009"]: THREE.Mesh;
    ["tent-party009_1"]: THREE.Mesh;
    ["tent-party011"]: THREE.Mesh;
    ["tent-party011_1"]: THREE.Mesh;
    ["tent-party002"]: THREE.Mesh;
    ["tent-party002_1"]: THREE.Mesh;
    ["tent-party005"]: THREE.Mesh;
    ["tent-party005_1"]: THREE.Mesh;
    ["tent-party008_1"]: THREE.Mesh;
    ["tent-party008_2"]: THREE.Mesh;
    ["tent-party010"]: THREE.Mesh;
    ["tent-party010_1"]: THREE.Mesh;
    ["tent-party006"]: THREE.Mesh;
    ["tent-party006_1"]: THREE.Mesh;
    ["tent-party004"]: THREE.Mesh;
    ["tent-party004_1"]: THREE.Mesh;
    ["tent-party012"]: THREE.Mesh;
    ["tent-party012_1"]: THREE.Mesh;
    ["tent-party"]: THREE.Mesh;
    ["tent-party_1"]: THREE.Mesh;
    ["tent-party"]: THREE.Mesh;
    ["tent-party_1"]: THREE.Mesh;
    ["building-cinema_1"]: THREE.Mesh;
    ["building-cinema_2"]: THREE.Mesh;
    ["building-cinema_3"]: THREE.Mesh;
    ["building-cinema_4"]: THREE.Mesh;
    ["building-cinema_5"]: THREE.Mesh;
    ["building-cinema_6"]: THREE.Mesh;
    ["building-cinema_7"]: THREE.Mesh;
    ["building-cinema_8"]: THREE.Mesh;
    ["airport-terminal_1"]: THREE.Mesh;
    ["airport-terminal_2"]: THREE.Mesh;
    ["airport-terminal_3"]: THREE.Mesh;
    ["airport-terminal_4"]: THREE.Mesh;
    ["airport-terminal_5"]: THREE.Mesh;
  };
  materials: {
    ["44 BLUE"]: THREE.MeshPhysicalMaterial;
    ["20 GREY.014"]: THREE.MeshPhysicalMaterial;
    ["42 BLUE-DARK"]: THREE.MeshPhysicalMaterial;
    ["43 BLUE-MEDIUM"]: THREE.MeshPhysicalMaterial;
    ["17 GREY-DARKEST.009"]: THREE.MeshPhysicalMaterial;
    ["62 EMISSION-YELLOW"]: THREE.MeshStandardMaterial;
    ["21 GREY LIGHT.001"]: THREE.MeshPhysicalMaterial;
    white: THREE.MeshStandardMaterial;
    ["15 BROWN-WHITE"]: THREE.MeshPhysicalMaterial;
    ["25 RED-DARKEST"]: THREE.MeshPhysicalMaterial;
    ["13 BROWN-LIGHT"]: THREE.MeshPhysicalMaterial;
    spotlight: THREE.MeshPhysicalMaterial;
    ["58 WHITE.003"]: THREE.MeshPhysicalMaterial;
    ["64 GLASS.002"]: THREE.MeshPhysicalMaterial;
    ["20 GREY.002"]: THREE.MeshPhysicalMaterial;
    ["17 GREY-DARKEST.009"]: THREE.MeshPhysicalMaterial;
    ["15 BROWN-WHITE"]: THREE.MeshPhysicalMaterial;
  };
};

export function EventsBuildings(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/events-buildings.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[36.243, 2.674, -36.914]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party007"].geometry}
          material={materials["44 BLUE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party007_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[28.419, 2.674, -36.804]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party009"].geometry}
          material={materials["42 BLUE-DARK"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party009_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[28.419, 2.674, -28.865]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party011"].geometry}
          material={materials["43 BLUE-MEDIUM"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party011_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[28.419, 2.674, -53.387]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party002"].geometry}
          material={materials["42 BLUE-DARK"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party002_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[28.419, 2.674, -45.448]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party005"].geometry}
          material={materials["43 BLUE-MEDIUM"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party005_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[44.061, 2.674, -36.804]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party008_1"].geometry}
          material={materials["42 BLUE-DARK"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party008_2"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[44.061, 2.674, -28.865]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party010"].geometry}
          material={materials["43 BLUE-MEDIUM"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party010_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[44.061, 2.674, -53.387]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party006"].geometry}
          material={materials["42 BLUE-DARK"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party006_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[44.061, 2.674, -45.448]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party004"].geometry}
          material={materials["43 BLUE-MEDIUM"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party004_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[36.243, 2.674, -28.865]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party012"].geometry}
          material={materials["44 BLUE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party012_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[36.243, 2.674, -53.387]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party"].geometry}
          material={materials["44 BLUE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group
        position={[36.243, 2.674, -45.448]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.282}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party"].geometry}
          material={materials["44 BLUE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tent-party_1"].geometry}
          material={materials["20 GREY.014"]}
        />
      </group>
      <group position={[36.853, 2.667, -84.024]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_1"].geometry}
          material={materials["17 GREY-DARKEST.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_2"].geometry}
          material={materials["62 EMISSION-YELLOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_3"].geometry}
          material={materials["21 GREY LIGHT.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_4"].geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_5"].geometry}
          material={materials["15 BROWN-WHITE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_6"].geometry}
          material={materials["25 RED-DARKEST"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_7"].geometry}
          material={materials["13 BROWN-LIGHT"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["building-cinema_8"].geometry}
          material={materials.spotlight}
        />
      </group>
      <group position={[-15.325, 3.528, -77.23]} scale={0.861}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["airport-terminal_1"].geometry}
          material={materials["58 WHITE.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["airport-terminal_2"].geometry}
          material={materials["64 GLASS.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["airport-terminal_3"].geometry}
          material={materials["20 GREY.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["airport-terminal_4"].geometry}
          material={materials["17 GREY-DARKEST.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["airport-terminal_5"].geometry}
          material={materials["15 BROWN-WHITE"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/events-buildings.glb");
