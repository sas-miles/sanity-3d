'use client';
import { useR3F } from '@/experience/providers/R3FContext';
import { useCameraStore } from '@/experience/scenes/store/cameraStore';
import { useLogoMarkerStore } from '@/experience/scenes/store/logoMarkerStore';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import LogoMarkerContent from './components/LogoMarkerContent';
import MainScene from './MainScene';
// Style to prevent scrollbars
const noScrollStyles = {
  height: '100%',
  width: '100%',
};

export default function MainSceneClient({ scene }: { scene: Sanity.Scene }) {
  const { selectedScene, setSelectedScene } = useLogoMarkerStore();
  const { setR3FContent } = useR3F();
  const [isReady, setIsReady] = useState(false);
  const { resetToInitial, isLoading } = useCameraStore();

  const memoizedScene = useMemo(() => scene, [scene._id]);

  useEffect(() => {
    resetToInitial();

    setIsReady(false);
    setSelectedScene(null);

    // Then set the content and make it visible
    setR3FContent(<MainScene scene={memoizedScene} />);
    setIsReady(true);

    // Cleanup when unmounting
    return () => {
      setR3FContent(null);
      setSelectedScene(null);

      // Only reset on unmount if we're not in loading state
      if (!isLoading) {
        resetToInitial();
      }
    };
  }, [setR3FContent, setSelectedScene, resetToInitial, isLoading, memoizedScene]);

  return (
    <div style={noScrollStyles}>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              zIndex: 1000,
            }}
          />
        )}
      </AnimatePresence>

      {/* Logo marker content: Render only when ready and a scene is selected */}
      <AnimatePresence>
        {isReady && selectedScene && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LogoMarkerContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
