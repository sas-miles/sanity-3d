/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { ThreeElements } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["tile-road-curve-nb003"]: THREE.Mesh;
    ["tile-road-curve-nb003_1"]: THREE.Mesh;
    ["tile-road-curve-nb003_2"]: THREE.Mesh;
    ["tile-road-curve-nb003_3"]: THREE.Mesh;
    ["tile-road-to-mainroad-nb001"]: THREE.Mesh;
    ["tile-road-to-mainroad-nb001_1"]: THREE.Mesh;
    ["tile-road-to-mainroad-nb001_2"]: THREE.Mesh;
    ["tile-road-to-mainroad-nb001_3"]: THREE.Mesh;
    ["tile-road-to-mainroad-nb001_4"]: THREE.Mesh;
    ["tile-road-straight-nb012"]: THREE.Mesh;
    ["tile-road-straight-nb012_1"]: THREE.Mesh;
    ["tile-road-straight-nb012_2"]: THREE.Mesh;
    ["tile-road-straight-nb012_3"]: THREE.Mesh;
    ["tile-road-straight-nb013"]: THREE.Mesh;
    ["tile-road-straight-nb013_1"]: THREE.Mesh;
    ["tile-road-straight-nb013_2"]: THREE.Mesh;
    ["tile-road-straight-nb014"]: THREE.Mesh;
    ["tile-road-straight-nb014_1"]: THREE.Mesh;
    ["tile-road-straight-nb014_2"]: THREE.Mesh;
    ["tile-road-end-nb001"]: THREE.Mesh;
    ["tile-road-end-nb001_1"]: THREE.Mesh;
    ["tile-road-end-nb001_2"]: THREE.Mesh;
  };
  materials: {
    ["21 GREY LIGHT"]: THREE.MeshPhysicalMaterial;
    ["18 GREY-DARK"]: THREE.MeshPhysicalMaterial;
    ["14 BROWN-LIGHTEST"]: THREE.MeshPhysicalMaterial;
    ["36 GREEN"]: THREE.MeshPhysicalMaterial;
    ["30 YELLOW"]: THREE.MeshPhysicalMaterial;
    ["58 WHITE"]: THREE.MeshPhysicalMaterial;
  };
};

export function GroundGatedCommunity(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/road-zone-gated-community.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        name="gc-road-curved"
        position={[180, 2.667, 105]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="tile-road-curve-nb003"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb003"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-curve-nb003_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb003_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-curve-nb003_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb003_2"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-curve-nb003_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-curve-nb003_3"].geometry}
          material={materials["36 GREEN"]}
        />
      </group>
      <group
        name="gc-main-road"
        position={[60, 2.667, 75]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-to-mainroad-nb001"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-to-mainroad-nb001"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-to-mainroad-nb001_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-to-mainroad-nb001_1"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-to-mainroad-nb001_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-to-mainroad-nb001_2"].geometry}
          material={materials["30 YELLOW"]}
        />
        <mesh
          name="tile-road-to-mainroad-nb001_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-to-mainroad-nb001_3"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-to-mainroad-nb001_4"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-to-mainroad-nb001_4"].geometry}
          material={materials["58 WHITE"]}
        />
      </group>
      <group
        name="gc-road-outer-edge"
        position={[105, 2.617, 105]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-straight-nb012"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb012"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb012_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb012_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb012_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb012_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-straight-nb012_3"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb012_3"].geometry}
          material={materials["36 GREEN"]}
        />
      </group>
      <group
        name="gc-road-straight-outer"
        position={[180, 2.667, 75]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="tile-road-straight-nb013"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb013"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb013_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb013_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb013_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb013_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
      </group>
      <group
        name="gc-road-straight-inner"
        position={[105, 2.617, 75]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-straight-nb014"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb014"].geometry}
          material={materials["14 BROWN-LIGHTEST"]}
        />
        <mesh
          name="tile-road-straight-nb014_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb014_1"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-straight-nb014_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-straight-nb014_2"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
      </group>
      <group
        name="gc-road-end"
        position={[150, 2.667, 75]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="tile-road-end-nb001"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-end-nb001"].geometry}
          material={materials["18 GREY-DARK"]}
        />
        <mesh
          name="tile-road-end-nb001_1"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-end-nb001_1"].geometry}
          material={materials["21 GREY LIGHT"]}
        />
        <mesh
          name="tile-road-end-nb001_2"
          castShadow
          receiveShadow
          geometry={nodes["tile-road-end-nb001_2"].geometry}
          material={materials["36 GREEN"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/road-zone-gated-community.glb");
