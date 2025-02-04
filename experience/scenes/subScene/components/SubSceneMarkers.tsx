"use client";
import { Float, Html } from "@react-three/drei";
import { useState } from "react";
import { useCameraStore } from "../../store/cameraStore";
import { Vector3 } from "three";
import { Marker } from "../../../sceneCollections/markers/Marker";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
import { toPosition } from "../../../types/types";
import { PortableTextBlock } from "next-sanity";

// Define the expected type for a point of interest coming from Sanity.
export interface PointOfInterest {
  _key: string;
  _type: "pointOfInterest";
  title: string;
  body?: PortableTextBlock[];
  markerPosition: {
    x: number;
    y: number;
    z: number;
  };
  cameraPosition?: {
    x: number;
    y: number;
    z: number;
  };
  cameraTarget?: {
    x: number;
    y: number;
    z: number;
  };
}

// Accept the full scene type from Sanity.
// (scene.pointsOfInterest may include other objects too.)
interface SubSceneMarkersProps {
  scene: Sanity.Scene;
  onMarkerClick: (poi: PointOfInterest) => void;
}

export default function SubSceneMarkers({
  scene,
  onMarkerClick,
}: SubSceneMarkersProps) {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);
  const { camera } = useThree();
  const { setIsLoading } = useCameraStore();

  // IMPORTANT: filter out only the valid points so that both markers and carousel use the same data.
  const validPointsOfInterest = (scene.pointsOfInterest ?? []).filter(
    (poi): poi is PointOfInterest => (poi as any).markerPosition !== undefined
  );

  const handleMarkerClick = (poi: PointOfInterest) => {
    const index = validPointsOfInterest.findIndex((p) => p._key === poi._key);
    useCameraStore.getState().setCurrentPoiIndex(index);
    onMarkerClick(poi);

    if (poi.cameraPosition && poi.cameraTarget) {
      useCameraStore.getState().setControlType("Disabled");
      useCameraStore
        .getState()
        .startCameraTransition(
          camera.position.clone(),
          new Vector3(
            poi.cameraPosition.x,
            poi.cameraPosition.y,
            poi.cameraPosition.z
          ),
          camera
            .getWorldDirection(new Vector3())
            .multiplyScalar(100)
            .add(camera.position),
          new Vector3(
            poi.cameraTarget.x,
            poi.cameraTarget.y,
            poi.cameraTarget.z
          )
        );
    } else {
      console.warn("Missing camera position or target:", poi);
    }
  };

  // Leva controls for a debug marker
  const debugMarkerPos = useControls("Debug Marker Controls", {
    markerX: { value: 1, min: -200, max: 200, step: 0.1 },
    markerY: { value: 10, min: -200, max: 200, step: 0.1 },
    markerZ: { value: 0, min: -200, max: 200, step: 0.1 },
  });

  return (
    <group>
      {validPointsOfInterest.map((poi) => (
        <Float
          key={poi._key}
          speed={3}
          rotationIntensity={0}
          floatIntensity={1}
          floatingRange={[-0.1, 0.1]}
        >
          <group
            position={toPosition(poi.markerPosition)}
            onClick={() => handleMarkerClick(poi)}
            onPointerEnter={() => setHoveredMarkerId(poi._key)}
            onPointerLeave={() => setHoveredMarkerId(null)}
          >
            <Html transform>
              <div className="bg-red-500 backdrop-blur-sm px-2 py-1 rounded-lg cursor-pointer">
                <h3 className="text-lg font-bold">{poi.title}</h3>
              </div>
            </Html>
            <group position={[0, -1, 0]} scale={[0.25, 0.25, 0.25]}>
              <Marker />
            </group>
          </group>
        </Float>
      ))}
      {process.env.NODE_ENV === "development" && (
        <group>
          <Float
            speed={10}
            rotationIntensity={0}
            floatIntensity={1}
            floatingRange={[-0.1, 0.1]}
          >
            <group
              position={toPosition({
                x: debugMarkerPos.markerX ?? 0,
                y: debugMarkerPos.markerY ?? 0,
                z: debugMarkerPos.markerZ ?? 0,
              })}
            >
              <Html transform>
                <div className="bg-red-500 backdrop-blur-sm px-2 py-1 rounded-lg cursor-pointer">
                  <h3 className="text-lg font-bold">Debug Marker</h3>
                </div>
              </Html>
              <group position={[0, -1, 0]} scale={[0.25, 0.25, 0.25]}>
                <Marker />
              </group>
            </group>
          </Float>
        </group>
      )}
    </group>
  );
}
