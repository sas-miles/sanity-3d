import { MeshGLTFModel } from '@/experience/types/modelTypes';
import { createSharedAtlasMaterial } from '@/experience/utils/materialUtils';
import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import type * as THREE from 'three';
export function Vehicles(props: ThreeElements['group']) {
  type GLTFResult = MeshGLTFModel & {
    materials: {
      LogoWrap: THREE.MeshStandardMaterial;
    };
  };
  const { nodes, materials } = useGLTF('/models/vehicles.glb') as unknown as GLTFResult;
  const LowpolyMaterial = createSharedAtlasMaterial(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        name="city-bus"
        castShadow
        receiveShadow
        geometry={nodes['city-bus'].geometry}
        material={LowpolyMaterial}
        position={[28.233, 0.003, 0]}
      />
      <mesh
        name="camping-van"
        castShadow
        receiveShadow
        geometry={nodes['camping-van'].geometry}
        material={LowpolyMaterial}
        position={[13.17, 0.041, 0]}
      />
      <mesh
        name="truck"
        castShadow
        receiveShadow
        geometry={nodes.truck.geometry}
        material={LowpolyMaterial}
        position={[7.093, 0.015, 0]}
      />
      <mesh
        name="taxi"
        castShadow
        receiveShadow
        geometry={nodes.taxi.geometry}
        material={LowpolyMaterial}
        position={[-3.997, 0.034, 0]}
      />
      <mesh
        name="hippie-van"
        castShadow
        receiveShadow
        geometry={nodes['hippie-van'].geometry}
        material={LowpolyMaterial}
        position={[-11.194, -0.008, 0]}
      />
      <mesh
        name="cement-truck"
        castShadow
        receiveShadow
        geometry={nodes['cement-truck'].geometry}
        material={LowpolyMaterial}
        position={[20.458, 0.013, 0]}
      />
      <mesh
        name="jeep"
        castShadow
        receiveShadow
        geometry={nodes.jeep.geometry}
        material={LowpolyMaterial}
        position={[-7.309, 0.004, 0]}
      />
      <mesh
        name="car-sedan-white"
        castShadow
        receiveShadow
        geometry={nodes['car-sedan-white'].geometry}
        material={LowpolyMaterial}
        position={[-15.585, 0.034, 0]}
      />
      <mesh
        name="camper"
        castShadow
        receiveShadow
        geometry={nodes.camper.geometry}
        material={LowpolyMaterial}
        position={[0.061, 0.034, 0]}
      />
      <group name="patrol-car" position={[-20.532, 0, 0]} scale={1.317}>
        <mesh
          name="patrol-car_1"
          castShadow
          receiveShadow
          geometry={nodes['patrol-car_1'].geometry}
          material={LowpolyMaterial}
        />
        <mesh
          name="patrol-car_2"
          castShadow
          receiveShadow
          geometry={nodes['patrol-car_2'].geometry}
          material={materials.LogoWrap}
        />
      </group>
      <mesh
        name="plane-passenger"
        castShadow
        receiveShadow
        geometry={nodes['plane-passenger'].geometry}
        material={LowpolyMaterial}
      />
      <mesh
        name="car-caravan-big-standing"
        castShadow
        receiveShadow
        geometry={nodes['car-caravan-big-standing'].geometry}
        material={LowpolyMaterial}
        position={[-27.108, 0, 6.387]}
      />
      <mesh
        name="car-camper-bus-standing"
        castShadow
        receiveShadow
        geometry={nodes['car-camper-bus-standing'].geometry}
        material={LowpolyMaterial}
        position={[-31.448, 0, 0]}
      />
      <mesh
        name="car-sedan-red"
        castShadow
        receiveShadow
        geometry={nodes['car-sedan-red'].geometry}
        material={LowpolyMaterial}
        position={[-15.585, 0.034, -6.765]}
      />
      <mesh
        name="car-sedan-blue"
        castShadow
        receiveShadow
        geometry={nodes['car-sedan-blue'].geometry}
        material={LowpolyMaterial}
        position={[-15.585, 0.034, -15.236]}
      />
      <mesh
        name="car-sedan-gray"
        castShadow
        receiveShadow
        geometry={nodes['car-sedan-gray'].geometry}
        material={LowpolyMaterial}
        position={[-15.585, 0.034, -22.956]}
      />
      <mesh
        name="golf-cart-base"
        castShadow
        receiveShadow
        geometry={nodes['golf-cart-base'].geometry}
        material={LowpolyMaterial}
        position={[-40.367, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/vehicles.glb');
