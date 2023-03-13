'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import fontJson from '../../public/helvetiker_regular.typeface.json';

// const font = new THREE.Font(fontJson);

const VModel: React.FC = () => {


  const V : React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const vShapePoints = [
        0, 0, 0,
        -1, 1, 0,
        -0.5, 1, 0,
        0, 0.5, 0,
        0.5, 1, 0,
        1, 1, 0,
        0, 0, 0
    ];

    const vShapeFaces = [
        0, 1, 2,
        0, 2, 3,
        0, 3, 4,
        0, 4, 5
    ];
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() / 1000;
        // meshRef.current!.rotation.y = time;
        const box = new THREE.Box3().setFromObject(meshRef.current);
        const center = new THREE.Vector3();
        box.getCenter(center);
        meshRef.current!.position.sub(center);
        meshRef.current!.rotation.y += .01; // Example rotation
        meshRef.current!.position.add(center);
        // meshRef.current!.rotation.z = time;
    });

    const extrudeSettings = {
        steps: 2,
        depth: 1,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 1
    };
    const loader = new FontLoader();
    // const geometry = new THREE.BufferGeometry();
    // geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vShapePoints), 3));
    // geometry.setIndex(vShapeFaces);
    
    loader.load('/helvetiker_regular.typeface.json', function ( font ) {

        const geometry = new TextGeometry( 'V', {
            font: font,
            size: 25,
            height: 10,
            curveSegments: 3,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 1
        } );
        meshRef.current.geometry = geometry;
    } );


    return (
        <group position={[0, -20, 0]} >
            
            {/* geometry={geometry} */}
            <mesh ref={meshRef} >
                <meshBasicMaterial color="red" /> 
            </mesh>
        </group>
    );
  }


  return (
    <Canvas style={{margin:"auto", width: 150, height: 150, position: 'absolute' }} camera={{ position: [50, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <V />
    </Canvas>
  );
};

export default VModel;