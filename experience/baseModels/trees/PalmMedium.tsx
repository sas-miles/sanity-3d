/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useContext, createContext, useEffect } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
interface PalmInstances {
  Palm: React.ComponentType<ThreeElements["mesh"]>;
  Palm1: React.ComponentType<ThreeElements["mesh"]>;
}
const context = createContext<PalmInstances | null>(null);

// Define position patterns that can be reused
const GRID_POSITIONS = {
  mainRow: [90.314, 70.337, 51.22, 32.296],
  specialPositions: [
    [-73.796, -70.744],
    [-65.568, -70.744],
    [-73.796, -78.862],
    [-65.568, -78.862],
    [-77.468, -57.46],
    [-77.468, -32.684],
    [-92.239, -57.46],
    [-77.468, -44.224],
    [46.398, 35.897],
  ],
};

const COLUMNS = [52.502, 19.542, -49.85];

export function Instances({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const { nodes, materials } = useGLTF("/models/tree-medium.glb");
  
  // Explicitly set shadow properties on all meshes
  Object.values(nodes).forEach((node: any) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      
      // Ensure materials are configured for shadows
      if (node.material) {
        node.material.needsUpdate = true;
      }
    }
  });
  
  const instances = useMemo(
    () => ({
      Palm: nodes.palm_1,
      Palm1: nodes.palm_2,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances: PalmInstances) => (
        <context.Provider value={instances}>{children}</context.Provider>
      )}
    </Merged>
  );
}

function Palm({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const instances = useContext(context);

  if (!instances) {
    console.error("Palm must be used within an Instances component");
    return null;
  }

  return (
    <group position={position} rotation={rotation}>
      <instances.Palm name="palm_1" castShadow receiveShadow />
      <instances.Palm1 name="palm_2" castShadow receiveShadow />
    </group>
  );
}

export function PalmMedium(props: ThreeElements["group"]) {
  // Force shadow update on mount
  useEffect(() => {
    // Force a render update to ensure shadows are applied
    const timeout = setTimeout(() => {
      const event = new CustomEvent('shadow-update');
      window.dispatchEvent(event);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Instances>
      <PalmMediumContent {...props} />
    </Instances>
  );
}

function PalmMediumContent(props: ThreeElements["group"]) {
  const palmPositions = useMemo(() => {
    const positions: Array<{
      position: [number, number, number];
      rotation: [number, number, number];
    }> = [];

    // Add special positions
    GRID_POSITIONS.specialPositions.forEach(([x, z]) => {
      positions.push({
        position: [x, 2.828, z] as [number, number, number],
        rotation: [Math.PI, x === -65.568 ? -0.863 : 0, Math.PI] as [
          number,
          number,
          number,
        ],
      });
    });

    // Add grid positions
    COLUMNS.forEach((x) => {
      GRID_POSITIONS.mainRow.forEach((z) => {
        positions.push({
          position: [x, 2.828, -z] as [number, number, number],
          rotation: [Math.PI, 0, Math.PI] as [number, number, number],
        });
      });
    });

    return positions;
  }, []);

  return (
    <group {...props} dispose={null}>
      {palmPositions.map((palmProps, index) => (
        <Palm key={index} {...palmProps} />
      ))}
    </group>
  );
}

useGLTF.preload("/models/tree-medium.glb");
