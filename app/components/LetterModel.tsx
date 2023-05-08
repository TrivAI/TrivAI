'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box3, Vector3} from 'three';
import type { Mesh } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { useSession } from 'next-auth/react';
// import fontJson from '../../public/helvetiker_regular.typeface.json';

// const font = new THREE.Font(fontJson);

function LetterModel() {
  const {data: session} = useSession();
  let userFirstLetter : string;
    if (session?.user.name) {
        userFirstLetter = session?.user.name[0];
    } else {
        userFirstLetter = 'T';
    }
  const Letter : React.FC = () => {
    const meshRef = useRef<Mesh>(null!);
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() / 1000;
        // meshRef.current!.rotation.y = time;
        const box = new Box3().setFromObject(meshRef.current);
        const center = new Vector3();
        box.getCenter(center);
        meshRef.current!.position.sub(center);
        meshRef.current!.rotation.y += .01; // Example rotation
        meshRef.current!.position.add(center);
        // meshRef.current!.rotation.z = time;
    });

    const loader = new FontLoader();
    
    loader.load('/helvetiker_regular.typeface.json', function ( font ) {

        const geometry = new TextGeometry(`${userFirstLetter}`, {
          font: font,
          size: 25,
          height: 10,
          curveSegments: 3,
          bevelEnabled: true,
          bevelThickness: 0,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 1,
        });
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
    <Canvas
      style={{ margin: "auto", width: 350, height: 350 }}
      camera={{ position: [50, 0, 10] }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Letter />
    </Canvas>
  );
};

export default React.memo(LetterModel);