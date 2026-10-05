import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ZoomIn, ZoomOut, RotateCcw, Compass } from 'lucide-react';

interface Globe3DProps {
  activeRouteId: string | null;
  onSelectRoute: (routeId: string) => void;
}

interface DestinationNode {
  id: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
  region: string;
}

export const Globe3D: React.FC<Globe3DProps> = ({ activeRouteId, onSelectRoute }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);
  const cameraDistanceRef = useRef<number>(240);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Geographic coordinates: Origin = Surat, India (21.17° N, 72.83° E)
  const origin = { lat: 21.17, lon: 72.83, name: 'INDIA (SURAT HQ)', port: 'Mundra & JNPT Corridors' };

  const destinations: DestinationNode[] = [
    { id: 'middle-east', name: 'Middle East', city: 'Dubai / Jebel Ali', lat: 25.2, lon: 55.27, region: 'Gulf & Arabian Sea' },
    { id: 'europe', name: 'Europe', city: 'Rotterdam / Mediterranean', lat: 51.92, lon: 4.47, region: 'North Sea & Med Terminals' },
    { id: 'asia', name: 'Asia & ASEAN', city: 'Singapore / East Asia', lat: 1.35, lon: 103.82, region: 'Malacca Strait & Pacific' },
    { id: 'africa', name: 'Africa', city: 'Mombasa / Durban', lat: -4.04, lon: 39.66, region: 'East & Southern Africa' },
    { id: 'global-transit', name: 'Americas & Global', city: 'New York / Atlantic Feeder', lat: 40.71, lon: -74.0, region: 'Transatlantic & Transpacific' },
  ];

  // Helper: Convert Lat/Lon to Vector3 on sphere
  const latLongToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  // Rotate globe smoothly when activeRouteId changes
  useEffect(() => {
    if (!activeRouteId) {
      targetRotationRef.current = null;
      return;
    }
    const dest = destinations.find((d) => d.id === activeRouteId);
    if (dest) {
      const midLon = (origin.lon + dest.lon) / 2;
      const midLat = (origin.lat + dest.lat) / 2;
      const targetY = -((midLon + 180) * (Math.PI / 180)) + Math.PI / 2;
      const targetX = (midLat * Math.PI) / 180 * 0.45;
      targetRotationRef.current = { x: targetX, y: targetY };
    }
  }, [activeRouteId]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.z = cameraDistanceRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Cosmic Ambient Starfield (1200 glowing particles)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1200;
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 400 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = radius * Math.cos(phi);

      // Subtle warm gold and diamond-white stars
      const isGold = Math.random() > 0.65;
      starColors[i * 3] = isGold ? 1.0 : 0.85;
      starColors[i * 3 + 1] = isGold ? 0.84 : 0.9;
      starColors[i * 3 + 2] = isGold ? 0.4 : 1.0;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 3. Multi-Point Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x1a202c, 2.2);
    scene.add(ambientLight);

    // Warm Sun Directional Light
    const sunLight = new THREE.DirectionalLight(0xfffaed, 3.2);
    sunLight.position.set(200, 100, 180);
    scene.add(sunLight);

    // Corporate Gold Rim Light (creates luminous edge glow)
    const goldRimLight = new THREE.DirectionalLight(0xd4af37, 2.8);
    goldRimLight.position.set(-200, -80, -120);
    scene.add(goldRimLight);

    // Subtle Cyan Fill Light from bottom
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillLight.position.set(0, -150, 80);
    scene.add(fillLight);

    // 4. Globe Textures Loading
    const globeRadius = 75;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial position: Orient directly towards India
    globeGroup.rotation.y = -((origin.lon + 180) * (Math.PI / 180)) + Math.PI / 2;
    globeGroup.rotation.x = (origin.lat * Math.PI) / 180 * 0.4;

    const textureLoader = new THREE.TextureLoader();
    const masterTexture = textureLoader.load('/textures/earth-shreenath-master.jpg');
    masterTexture.wrapS = THREE.RepeatWrapping;
    masterTexture.wrapT = THREE.ClampToEdgeWrapping;

    const bumpTexture = textureLoader.load('/textures/earth-topology.png');
    bumpTexture.wrapS = THREE.RepeatWrapping;
    bumpTexture.wrapT = THREE.ClampToEdgeWrapping;

    // 5. Earth Sphere Mesh
    const globeGeo = new THREE.SphereGeometry(globeRadius, 96, 96);
    const globeMat = new THREE.MeshStandardMaterial({
      map: masterTexture,
      bumpMap: bumpTexture,
      bumpScale: 1.6,
      roughness: 0.62,
      metalness: 0.18,
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // 6. Custom Atmosphere Glow Shaders (Inner Soft Glow + Outer Ethereal Halo)
    // Outer Atmosphere Halo (BackSide)
    const outerHaloGeo = new THREE.SphereGeometry(globeRadius * 1.15, 64, 64);
    const outerHaloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 3.2);
          gl_FragColor = vec4(0.83, 0.69, 0.22, 1.0) * intensity * 0.9;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const outerHalo = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    scene.add(outerHalo);

    // Inner Atmosphere Fresnel Shell (FrontSide)
    const innerAtmoGeo = new THREE.SphereGeometry(globeRadius * 1.018, 64, 64);
    const innerAtmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.72 - dot(vNormal, vec3(0, 0, 1.0)), 2.4);
          gl_FragColor = vec4(0.95, 0.82, 0.35, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const innerAtmo = new THREE.Mesh(innerAtmoGeo, innerAtmoMat);
    globeGroup.add(innerAtmo);

    // 7. Surat / Western India Origin HQ Marker
    const originPos = latLongToVector3(origin.lat, origin.lon, globeRadius);

    // Gold Beacon Diamond/Star Pin
    const originPinGeo = new THREE.OctahedronGeometry(2.4, 0);
    const originPinMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const originPin = new THREE.Mesh(originPinGeo, originPinMat);
    originPin.position.copy(originPos.clone().multiplyScalar(1.02));
    globeGroup.add(originPin);

    // Origin Vertical Beacon Light Beam
    const beamGeo = new THREE.CylinderGeometry(0.4, 1.2, 14, 16);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffe680,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const originBeam = new THREE.Mesh(beamGeo, beamMat);
    originBeam.position.copy(originPos.clone().multiplyScalar(1.09));
    originBeam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), originPos.clone().normalize());
    globeGroup.add(originBeam);

    // Triple Concentric Pulsing Radar Rings
    const radarRings: { mesh: THREE.Mesh; phase: number }[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.RingGeometry(2.2, 3.4, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(originPos.clone().multiplyScalar(1.01));
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);
      radarRings.push({ mesh: ring, phase: i * (Math.PI / 1.5) });
    }

    // 8. Destination Hubs & Animated Comet Trade Arcs
    const interactivePins: THREE.Mesh[] = [];
    const curveObjects: {
      line: THREE.Line;
      cometParticles: THREE.Mesh[];
      curve: THREE.CatmullRomCurve3;
      destId: string;
      destPos: THREE.Vector3;
    }[] = [];

    destinations.forEach((dest) => {
      const destPos = latLongToVector3(dest.lat, dest.lon, globeRadius);

      // Interactive destination node sphere
      const pinGeo = new THREE.SphereGeometry(2.4, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: 0xc9a227,
        emissive: 0x997515,
        roughness: 0.3,
        metalness: 0.8,
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(destPos.clone().multiplyScalar(1.015));
      pinMesh.userData = { routeId: dest.id, name: dest.name, city: dest.city };
      globeGroup.add(pinMesh);
      interactivePins.push(pinMesh);

      // Destination Ground Halo Ring
      const destRingGeo = new THREE.RingGeometry(2.6, 3.6, 32);
      const destRingMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const destRing = new THREE.Mesh(destRingGeo, destRingMat);
      destRing.position.copy(destPos.clone().multiplyScalar(1.01));
      destRing.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(destRing);

      // Calculate 3D Parabolic Ballistic Trajectory
      const dist = originPos.distanceTo(destPos);
      const midPoint = originPos.clone().lerp(destPos, 0.5);
      const altitude = globeRadius + Math.pow(dist, 1.08) * 0.32;
      midPoint.normalize().multiplyScalar(altitude);

      const curve = new THREE.CatmullRomCurve3([
        originPos.clone().multiplyScalar(1.01),
        midPoint,
        destPos.clone().multiplyScalar(1.01),
      ]);

      const points = curve.getPoints(64);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.55,
        linewidth: 2,
      });
      const line = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(line);

      // Multi-Particle Glowing Comet Tail (Head photon + 4 trailing sparks)
      const cometParticles: THREE.Mesh[] = [];
      const tailLengths = [1.8, 1.5, 1.2, 0.9, 0.6];
      const opacities = [1.0, 0.75, 0.5, 0.3, 0.15];

      for (let i = 0; i < 5; i++) {
        const pGeo = new THREE.SphereGeometry(tailLengths[i], 12, 12);
        const pMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0xffffff : 0xffdf7a,
          transparent: true,
          opacity: opacities[i],
          blending: THREE.AdditiveBlending,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        globeGroup.add(pMesh);
        cometParticles.push(pMesh);
      }

      curveObjects.push({ line, cometParticles, curve, destId: dest.id, destPos });
    });

    // 9. Interaction: Mouse/Touch Rotation, Raycasting & Zooming
    let isDragging = false;
    let startMouseX = 0;
    let startMouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotSpeedX = 0;
    let rotSpeedY = 0;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      targetRotationRef.current = null;
      startMouseX = e.clientX;
      startMouseY = e.clientY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      // Hover detection on pins
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactivePins);
      if (intersects.length > 0) {
        container.style.cursor = 'pointer';
        const hit = intersects[0].object;
        setHoveredNode(hit.userData?.name || null);
      } else {
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
        setHoveredNode(null);
      }

      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;

      rotSpeedY = deltaX * 0.005;
      rotSpeedX = deltaY * 0.005;

      globeGroup.rotation.y += rotSpeedY;
      globeGroup.rotation.x += rotSpeedX;

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = 'grab';

      const diffX = Math.abs(e.clientX - startMouseX);
      const diffY = Math.abs(e.clientY - startMouseY);
      if (diffX < 6 && diffY < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(interactivePins);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hit.userData?.routeId) {
            onSelectRoute(hit.userData.routeId);
          }
        }
      }
    };

    // Smooth Mouse Wheel Zoom (Clamped between 170 and 320)
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.12;
      cameraDistanceRef.current = THREE.MathUtils.clamp(cameraDistanceRef.current + zoomDelta, 170, 320);
      camera.position.z = cameraDistanceRef.current;

      const pct = Math.round(((320 - cameraDistanceRef.current) / (320 - 170)) * 100);
      setZoomLevel(pct);
    };

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        targetRotationRef.current = null;
        startMouseX = e.touches[0].clientX;
        startMouseY = e.touches[0].clientY;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;

      rotSpeedY = deltaX * 0.005;
      rotSpeedX = deltaY * 0.005;

      globeGroup.rotation.y += rotSpeedY;
      globeGroup.rotation.x += rotSpeedX;

      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return;
      isDragging = false;

      if (e.changedTouches.length === 1) {
        const diffX = Math.abs(e.changedTouches[0].clientX - startMouseX);
        const diffY = Math.abs(e.changedTouches[0].clientY - startMouseY);
        if (diffX < 10 && diffY < 10) {
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((e.changedTouches[0].clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((e.changedTouches[0].clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(interactivePins);
          if (intersects.length > 0) {
            const hit = intersects[0].object;
            if (hit.userData?.routeId) {
              onSelectRoute(hit.userData.routeId);
            }
          }
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth programmatic target rotation when route is clicked
      if (targetRotationRef.current) {
        const lerpFactor = 0.045;
        globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * lerpFactor;
        globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * lerpFactor;
      } else if (!isDragging) {
        // Natural inertia damping & gentle auto-orbit rotation
        rotSpeedX *= 0.94;
        rotSpeedY *= 0.94;
        globeGroup.rotation.y += rotSpeedY + 0.0016;
        globeGroup.rotation.x += rotSpeedX;
      }

      // Latitude clamp
      globeGroup.rotation.x = Math.max(-1.1, Math.min(1.1, globeGroup.rotation.x));

      // Starfield subtle counter-drift
      starField.rotation.y = -elapsedTime * 0.0006;

      // Rotate Origin Pin (Diamond spin)
      originPin.rotation.y = elapsedTime * 1.5;
      originPin.rotation.x = elapsedTime * 0.8;

      // Animate Triple Concentric Radar Rings
      radarRings.forEach((r, idx) => {
        const t = (elapsedTime * 1.8 + idx * 0.6) % 1.8;
        const scale = 1.0 + t * 1.6;
        const opacity = Math.max(0, 1.0 - t / 1.8);
        r.mesh.scale.set(scale, scale, scale);
        (r.mesh.material as THREE.MeshBasicMaterial).opacity = opacity * 0.8;
      });

      // Animate Animated Comet Trails along Trade Arcs
      curveObjects.forEach((item, idx) => {
        const isSelected = activeRouteId === item.destId;
        const speed = isSelected ? 0.38 : 0.24 + idx * 0.03;
        const baseT = (elapsedTime * speed) % 1;

        // Active route styling
        const lineMat = item.line.material as THREE.LineBasicMaterial;
        lineMat.opacity = isSelected ? 0.95 : 0.45;
        lineMat.color.setHex(isSelected ? 0xffdf7a : 0xc9a227);

        // Update trailing comet particles
        item.cometParticles.forEach((particle, pIdx) => {
          const trailOffset = pIdx * 0.022;
          let pT = baseT - trailOffset;
          if (pT < 0) pT += 1;
          const pos = item.curve.getPointAt(pT);
          particle.position.copy(pos);

          // Active route comet glows larger
          const scale = isSelected ? 1.4 : 1.0;
          particle.scale.set(scale, scale, scale);
        });
      });

      renderer.render(scene, camera);
    };

    animate();

    // 11. Responsive Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      masterTexture.dispose();
      bumpTexture.dispose();
      outerHaloGeo.dispose();
      outerHaloMat.dispose();
      innerAtmoGeo.dispose();
      innerAtmoMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, [activeRouteId]);

  // UI Control Handlers
  const handleZoom = (delta: number) => {
    cameraDistanceRef.current = THREE.MathUtils.clamp(cameraDistanceRef.current + delta, 170, 320);
    const pct = Math.round(((320 - cameraDistanceRef.current) / (320 - 170)) * 100);
    setZoomLevel(pct);
  };

  const handleReset = () => {
    targetRotationRef.current = {
      x: (origin.lat * Math.PI) / 180 * 0.4,
      y: -((origin.lon + 180) * (Math.PI / 180)) + Math.PI / 2,
    };
    cameraDistanceRef.current = 240;
    setZoomLevel(53);
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[600px] flex items-center justify-center select-none overflow-hidden bg-radial from-[#121622] via-[#090b10] to-[#040507]">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Top Left: Mode Badge & Live Node Status */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="inline-flex items-center space-x-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-white/10 text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>NASA HIGH-RES 3D GLOBE • 360° INTERACTIVE</span>
        </div>

        {hoveredNode && (
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37] text-black font-extrabold text-xs px-3 py-1 rounded-xs tracking-wider shadow-lg animate-fade-in uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>DESTINATION: {hoveredNode}</span>
          </div>
        )}
      </div>

      {/* Floating Top Right: Interactive 3D Camera Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-xs border border-white/10">
        <button
          onClick={() => handleZoom(-30)}
          title="Zoom In"
          className="p-1.5 text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-white/10 rounded-xs transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(30)}
          title="Zoom Out"
          className="p-1.5 text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-white/10 rounded-xs transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          title="Reset View to India HQ"
          className="p-1.5 text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-white/10 rounded-xs transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <span className="text-[10px] font-mono text-[#888888] px-2 border-l border-white/10">
          {zoomLevel}%
        </span>
      </div>

      {/* Floating Bottom Left: Strategic Origin Telemetry */}
      <div className="absolute bottom-4 left-4 z-20 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xs border border-white/10 text-[10px] font-mono tracking-widest text-[#AAAAAA] uppercase pointer-events-none hidden sm:block">
        <div className="flex items-center space-x-2 text-white font-bold mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
          <span>ORIGIN: {origin.name}</span>
        </div>
        <div className="text-[9px] text-[#777777]">
          COORD: 21.17° N, 72.83° E • {origin.port}
        </div>
      </div>

      {/* Floating Bottom Right: Navigation Hint */}
      <div className="absolute bottom-4 right-4 z-20 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/10 text-[10px] font-mono tracking-widest text-[#777777] uppercase pointer-events-none">
        DRAG TO ROTATE • SCROLL TO ZOOM
      </div>
    </div>
  );
};
