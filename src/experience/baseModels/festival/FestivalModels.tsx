/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

/*
gltf-pipeline -i raw-exports/models/festival-models.gltf -o public/models/festival-models.glb --keep-image
*/

import { MeshGLTFModel } from '@/experience/types/modelTypes';
import { createSharedAtlasMaterial } from '@/experience/utils/materialUtils';
import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';

export function FestivalModels(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/models/festival-models.glb') as unknown as MeshGLTFModel;
  const LowpolyMaterial = createSharedAtlasMaterial(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-war'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-26.17, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-party-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-49.18, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-party-blue'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-20.776, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sunscreen.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15.697, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stand-ice-cream'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-1.66, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stand-cotton-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-6.113, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stage-truss'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[52.735, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stage-platform-stairs-medium'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15.613, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stage-platform-medium'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[56.378, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stage-platform-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[48.092, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-tree-orb-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[38.541, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-tree-mushroom-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[42.694, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-projection-g'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[62.574, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-projection-f'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[23.783, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-projection-d'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[69.822, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['scifi-pot-low-palm'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[33.827, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['lights-string'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[10.22, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['information-stall-blue'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-39.807, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['hot-dog-stand'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-10.826, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fireplace.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[6.985, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['celebration-wall-half-big'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[28.739, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['cabin-beach'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[2.79, 0, 0]}
        scale={1.373}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['bench-garden'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[19.562, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['board-wire-papers'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[21.391, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-party-cyan'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-20.776, 0, -4.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-party-orange'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-20.776, 0, -9.581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tent-party-purple'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-20.776, 0, -15.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['information-stall-red'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-39.807, 0, -8.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['information-stall-green'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-32.592, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['information-stall-purple'].geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-32.592, 0, -8.318]}
      />
    </group>
  );
}

useGLTF.preload('/models/festival-models.glb');
