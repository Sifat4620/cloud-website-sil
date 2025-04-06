"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function BusinessHandshake() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const person1Ref = useRef<THREE.Mesh | null>(null)
  const person2Ref = useRef<THREE.Mesh | null>(null)
  const tableRef = useRef<THREE.Mesh | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8f9fa)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 1.5, 4)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 3
    controls.maxDistance = 10

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)

    // Table
    const tableGeometry = new THREE.BoxGeometry(3, 0.1, 1.5)
    const tableMaterial = new THREE.MeshStandardMaterial({
      color: 0x5d4037,
      roughness: 0.7,
      metalness: 0.1,
    })
    const table = new THREE.Mesh(tableGeometry, tableMaterial)
    table.position.y = 0.7
    table.castShadow = true
    table.receiveShadow = true
    scene.add(table)
    tableRef.current = table

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(10, 10)
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      roughness: 0.8,
      metalness: 0.2,
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = 0
    floor.receiveShadow = true
    scene.add(floor)

    // Business person 1
    const person1Geometry = new THREE.CylinderGeometry(0.2, 0.2, 1.2, 32)
    const person1Material = new THREE.MeshStandardMaterial({ color: 0x0a3d91 })
    const person1 = new THREE.Mesh(person1Geometry, person1Material)
    person1.position.set(-1, 1.3, 0)
    person1.castShadow = true
    scene.add(person1)
    person1Ref.current = person1

    // Head for person 1
    const head1Geometry = new THREE.SphereGeometry(0.2, 32, 32)
    const head1Material = new THREE.MeshStandardMaterial({ color: 0xe0ac69 })
    const head1 = new THREE.Mesh(head1Geometry, head1Material)
    head1.position.set(-1, 2, 0)
    head1.castShadow = true
    scene.add(head1)

    // Business person 2
    const person2Geometry = new THREE.CylinderGeometry(0.2, 0.2, 1.2, 32)
    const person2Material = new THREE.MeshStandardMaterial({ color: 0x00a651 })
    const person2 = new THREE.Mesh(person2Geometry, person2Material)
    person2.position.set(1, 1.3, 0)
    person2.castShadow = true
    scene.add(person2)
    person2Ref.current = person2

    // Head for person 2
    const head2Geometry = new THREE.SphereGeometry(0.2, 32, 32)
    const head2Material = new THREE.MeshStandardMaterial({ color: 0xe0ac69 })
    const head2 = new THREE.Mesh(head2Geometry, head2Material)
    head2.position.set(1, 2, 0)
    head2.castShadow = true
    scene.add(head2)

    // Arm for person 1
    const arm1Geometry = new THREE.BoxGeometry(0.8, 0.1, 0.1)
    const arm1Material = new THREE.MeshStandardMaterial({ color: 0x0a3d91 })
    const arm1 = new THREE.Mesh(arm1Geometry, arm1Material)
    arm1.position.set(-0.6, 1.5, 0)
    arm1.castShadow = true
    scene.add(arm1)

    // Arm for person 2
    const arm2Geometry = new THREE.BoxGeometry(0.8, 0.1, 0.1)
    const arm2Material = new THREE.MeshStandardMaterial({ color: 0x00a651 })
    const arm2 = new THREE.Mesh(arm2Geometry, arm2Material)
    arm2.position.set(0.6, 1.5, 0)
    arm2.castShadow = true
    scene.add(arm2)

    // Handshake (center point)
    const handGeometry = new THREE.SphereGeometry(0.1, 32, 32)
    const handMaterial = new THREE.MeshStandardMaterial({ color: 0xe0ac69 })
    const handshake = new THREE.Mesh(handGeometry, handMaterial)
    handshake.position.set(0, 1.5, 0)
    handshake.castShadow = true
    scene.add(handshake)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate the handshake
      handshake.position.y = 1.5 + Math.sin(elapsedTime * 5) * 0.05

      // Animate the arms to follow the handshake
      arm1.position.x = -0.6 + Math.sin(elapsedTime * 5) * 0.02
      arm2.position.x = 0.6 - Math.sin(elapsedTime * 5) * 0.02

      // Apply hover effect
      if (isHovered) {
        person1.scale.set(1.1, 1.1, 1.1)
        person2.scale.set(1.1, 1.1, 1.1)
      } else {
        person1.scale.set(1, 1, 1)
        person2.scale.set(1, 1, 1)
      }

      // Apply slider effect - rotate the scene based on slider value
      if (sceneRef.current) {
        sceneRef.current.rotation.y = THREE.MathUtils.degToRad((sliderValue - 50) * 3.6)
      }

      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [isHovered, sliderValue])

  return (
    <div className="flex flex-col space-y-4">
      <div
        ref={containerRef}
        className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-300"
        style={{
          boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div className="w-full px-2">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Rotate Left</span>
          <span>Rotate Right</span>
        </div>
      </div>
    </div>
  )
}

