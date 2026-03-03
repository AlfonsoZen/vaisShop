import { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  ContactShadows,
  PresentationControls,
} from '@react-three/drei'
import * as THREE from 'three'

function Model({ ...props }) {
  const { scene } = useGLTF("/headphones_airpods_pro/scene.gltf")
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (child.material) {
            child.material.envMapIntensity = 2.5
            child.material.metalness = 0.8
            child.material.roughness = 0.2
          }
        }
      })
    }
  }, [scene])

  // Aumentamos escala a 0.11 y bajamos la posición a -0.25 en Y
  return <primitive object={scene} {...props} scale={0.2} position={[0, -1.25, 0]} />
}

const EarphonesScene = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-full w-full" />;

  return (
    <div className="h-full w-full relative">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 25 }}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          alpha: true 
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 800 }}
            rotation={[0, -0.4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <Model />
          </PresentationControls>

          <ContactShadows 
            position={[0, -1.2, 0]} 
            opacity={0.35} 
            scale={12} 
            blur={3} 
            far={4} 
            resolution={512}
          />
          
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls 
          makeDefault 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.4} 
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default EarphonesScene;
