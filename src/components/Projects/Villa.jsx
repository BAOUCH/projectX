import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



const loader = new GLTFLoader();

const Villa = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lumière
    //const light = new THREE.DirectionalLight(0xffffff, 2);
    //light.position.set(5, 5, 5).normalize();
    const light = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
    scene.add( light );

    // Chargement du modèle GLTF
    const loader = new GLTFLoader();
    loader.load("src/assets/villa.glb", (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });

    camera.position.z = 20;
    camera.position.y = 20;
    const controls = new OrbitControls( camera, renderer.domElement );
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    
    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div  ref={containerRef} style={{ width: '400px', height: '300px', justifySelf:"center" }} ></div>;
}

export default Villa