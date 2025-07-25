/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { MeshGLTFModel } from '@/experience/types/modelTypes';
import { createSharedAtlasMaterial } from '@/experience/utils/materialUtils';
import { useGLTF, useTexture } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

export function IntroGroundPlane(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/landing/land-plane.glb'
  ) as unknown as MeshGLTFModel;

  // Create the base material with explicit non-reflective properties
  const LowpolyMaterial = useMemo(() => {
    const material = createSharedAtlasMaterial(materials, {
      roughness: 1,
      metalness: 0,
      envMapIntensity: 0, // Set to 0 to completely disable env reflections
    });

    // Ensure material isn't overridden by setting these properties
    material.roughness = 1;
    material.metalness = 0;
    material.envMapIntensity = 0;

    return material;
  }, [materials]);

  // Material ref to track if properties are being overridden
  const materialRef = useRef(LowpolyMaterial);

  // Track if component is mounted to prevent memory leaks
  const isMounted = useRef(true);

  // Load textures separately with useTexture
  const { specularMap, emissionMap } = useTexture({
    specularMap: '/textures/color-atlas-specular.png',
    emissionMap: '/textures/color-atlas-emission-night.png',
  });

  // Apply textures after they're loaded
  useEffect(() => {
    if (specularMap && materialRef.current) {
      const gridSize = 8;
      specularMap.wrapS = specularMap.wrapT = THREE.RepeatWrapping;
      specularMap.repeat.set(1 / gridSize, 1 / gridSize);
      specularMap.offset.set(5 / gridSize, 1 - (1 + 1) / gridSize);
      materialRef.current.roughnessMap = specularMap;
      // Force roughness to a reasonable value even with the map
      materialRef.current.roughness = 1;
      materialRef.current.needsUpdate = true;
    }

    if (emissionMap && materialRef.current) {
      const gridSize = 8;
      emissionMap.wrapS = emissionMap.wrapT = THREE.RepeatWrapping;
      emissionMap.repeat.set(1 / gridSize, 1 / gridSize);
      emissionMap.offset.set(5 / gridSize, 1 - (1 + 1) / gridSize);
      materialRef.current.emissiveMap = emissionMap;
      materialRef.current.emissive = new THREE.Color(0xffffff);
      materialRef.current.emissiveIntensity = 0; // Lower intensity for subtler glow
      materialRef.current.needsUpdate = true;
    }

    // Cleanup function to handle disposal
    return () => {
      isMounted.current = false;

      // Don't dispose shared material as it might be used elsewhere
      // But we can clean up our own references and maps if needed
      if (materialRef.current) {
        // Only dispose maps we explicitly added (not the base material)
        if (materialRef.current.roughnessMap === specularMap) {
          materialRef.current.roughnessMap = null;
        }
        if (materialRef.current.emissiveMap === emissionMap) {
          materialRef.current.emissiveMap = null;
        }

        materialRef.current.needsUpdate = true;
      }
    };
  }, [specularMap, emissionMap]);

  // Use useFrame to constantly enforce non-reflective properties
  // This ensures the material stays non-reflective even when environment changes
  useFrame(() => {
    if (materialRef.current && isMounted.current) {
      materialRef.current.envMapIntensity = 0;
      materialRef.current.roughness = 1;
      materialRef.current.metalness = 0;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene004">
        <mesh
          name="land-back"
          castShadow
          receiveShadow
          geometry={nodes['land-back'].geometry}
          material={materialRef.current}
          position={[0, 0.693, -295.132]}
          scale={[289.249, 256.168, 44.943]}
        />
        <mesh
          name="land-front"
          castShadow
          receiveShadow
          geometry={nodes['land-front'].geometry}
          material={materialRef.current}
          position={[0, 0.693, 59.943]}
          scale={[289.249, 256.168, 44.943]}
        />
      </group>
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload('/models/landing/land-plane.glb');
