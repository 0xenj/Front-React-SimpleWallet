import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

function Particles() {
  const containerRef = useRef(null);
  const mouseX = useRef(null);
  const mouseY = useRef(null);
  const particlesRef = useRef(null);
  const renderingParentRef = useRef(null);

  useEffect(() => {
    let myTween;
    let animProps = { scale: 1, xRot: 0, yRot: 0 };

    const init = () => {
      const container = containerRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const canvas = renderer.domElement;
      container.appendChild(canvas);

      if (container.childNodes.length > 1) {
        container.replaceChild(canvas, container.childNodes[0]);
      }

      const distance = Math.min(200, window.innerWidth / 4);
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 1600; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        const x = distance * Math.sin(theta) * Math.cos(phi);
        const y = distance * Math.sin(theta) * Math.sin(phi);
        const z = distance * Math.cos(theta);

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      
      geometry.computeBoundingSphere();
      const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff, size: 2 }));
      particlesRef.current = particles;

      const renderingParent = new THREE.Group();
      renderingParent.add(particles);
      renderingParentRef.current = renderingParent;
      scene.add(renderingParent);

      camera.position.z = geometry.boundingSphere.radius * 2;

      const animate = () => {
        requestAnimationFrame(animate);
      
        if (particlesRef.current) {
          renderer.render(scene, camera);
        }
      };

      animate();

      const onMouseMove = (event) => {
        if (myTween) myTween.kill();
      
        mouseX.current = event.clientX ? (event.clientX / window.innerWidth) * 2 - 1 : 0;
        mouseY.current = event.clientY ? -(event.clientY / window.innerHeight) * 2 + 1 : 0;
      
        myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY.current * -1, y: mouseX.current });
      };

      document.addEventListener('mousemove', onMouseMove, false);

      gsap.to(animProps, {
        duration: 10,
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine',
        onUpdate: () => {
          renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
        },
      });

      gsap.to(animProps, {
        duration: 120,
        xRot: Math.PI * 2,
        yRot: Math.PI * 4,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        onUpdate: () => {
          renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
        },
      });

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        container.dispose();
      };
    };

    init();
  }, []);

  return <div ref={containerRef} />;
}

export default Particles;
