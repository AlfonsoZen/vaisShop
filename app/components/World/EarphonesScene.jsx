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
          // Aumentar intensidad de reflejos para look metálico/plástico premium
          if (child.material) {
            child.material.envMapIntensity = 2.5
            child.material.metalness = 0.8
            child.material.roughness = 0.2
          }
        }
      })
    }
  }, [scene])

  // Ajustar escala visual aquí. 0.08 suele ser grande en modelos GLTF de Three.js
  return <primitive object={scene} {...props} scale={0.08} position={[0, -0.5, 0]} />
}

const EarphonesScene = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[700px] w-full" />;

  return (
    <div className="h-[700px] w-full relative">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 4.5], fov: 25 }} // FOV bajo para efecto teleobjetivo de lujo
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          alpha: true 
        }}
      >
        <Suspense fallback={null}>
          {/* Iluminación de Estudio: Principal, Relleno y Contorno */}
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
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

          {/* Sombra de contacto ultra suave para realismo en suelo */}
          <ContactShadows 
            position={[0, -0.8, 0]} 
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
