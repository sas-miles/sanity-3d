import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface ResponsiveConfig {
  camera: {
    position: Vec3;
    target: Vec3;
  };
  mainContent: {
    position: Vec3;
  };
  billboard: {
    position: Vec3;
    scale: number;
  };
}

// Responsive configurations
export const RESPONSIVE_CONFIGS: Record<'mobile' | 'tablet' | 'desktop', ResponsiveConfig> = {
  mobile: {
    camera: {
      position: { x: 0, y: 2, z: 29 },
      target: { x: 2, y: 7, z: 0 },
    },
    mainContent: {
      position: { x: 0, y: 20, z: -60 },
    },
    billboard: {
      position: { x: 2.4, y: 0, z: -77.6 },
      scale: 0.8,
    },
  },
  tablet: {
    camera: {
      position: { x: 20, y: 12, z: 70 },
      target: { x: 0, y: 18.1, z: 0 },
    },
    mainContent: {
      position: { x: -6.5, y: 35, z: -30 },
    },
    billboard: {
      position: { x: -12.3, y: 0, z: -30 },
      scale: 1.0,
    },
  },
  desktop: {
    camera: {
      position: { x: 15.0, y: 8.4, z: 78 },
      target: { x: -6, y: 22, z: 2 },
    },
    mainContent: {
      position: { x: -22.3, y: 32, z: -20 },
    },
    billboard: {
      position: { x: -4, y: 1.3, z: -20 },
      scale: 1.1,
    },
  },
};

// Custom hook for responsive configuration
export function useResponsiveConfig(): ResponsiveConfig {
  const { size, viewport } = useThree();

  return useMemo(() => {
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    let config: ResponsiveConfig;

    if (isMobile) {
      config = structuredClone(RESPONSIVE_CONFIGS.mobile);
      config.billboard.position.x = viewport.width * -0.2;
    } else if (isTablet) {
      config = structuredClone(RESPONSIVE_CONFIGS.tablet);
    } else {
      config = structuredClone(RESPONSIVE_CONFIGS.desktop);
    }

    return config;
  }, [size.width, viewport.width]);
}

// Helper hook for text styles based on screen size
export function useResponsiveTextStyles() {
  const { size } = useThree();

  return useMemo(
    () => ({
      textSize: size.width < 768 ? 'text-lg' : 'text-2xl',
      containerWidth:
        size.width < 768 ? 'w-[280px]' : size.width < 1024 ? 'w-[400px]' : 'w-[500px]',
    }),
    [size.width]
  );
}
