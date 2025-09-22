// تجربة 3D تعليمية أولية، يمكن وضعها في أي صفحة React كنموذج أولي
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Example3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // إعداد الأساسيات
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff);
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    mountRef.current.appendChild(renderer.domElement);

    // كوكب يدور حول الشمس
    const sunGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const planetGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x3366ff });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    // كوكب يدور
    const planetOrbit = new THREE.Object3D();
    planet.position.x = 2;
    planetOrbit.add(planet);
    scene.add(planetOrbit);

    function animate() {
      requestAnimationFrame(animate);
      planetOrbit.rotation.y += 0.01; // دوران الكوكب حول الشمس
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <h2>تجربة النظام الشمسي (نموذج 3D)</h2>
      <div ref={mountRef}></div>
      <p>هذه تجربة تفاعلية أولية: كوكب يدور حول الشمس ثلاثي الأبعاد.</p>
    </div>
  );
};

export default Example3D;
