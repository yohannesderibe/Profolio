import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'

export function HeroScene() {
  const meshRef = useRef<Mesh>(null)
  const ringRef = useRef<Mesh>(null)

  useFrame((state) => {
    const { pointer } = state
    if (meshRef.current) {
      meshRef.current.rotation.x = pointer.y * 0.3
      meshRef.current.rotation.y = pointer.x * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005
      ringRef.current.rotation.x = pointer.y * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#7c3aed" />

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#00d4ff"
            wireframe
            transparent
            opacity={0.85}
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.4} />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.25} />
      </mesh>
    </>
  )
}
