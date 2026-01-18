// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// const AnimatedBackground = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 7;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const candlesGroup = new THREE.Group();
//     scene.add(candlesGroup);

//     const candles = [];
//     const candleCount = 40;

//     for (let i = 0; i < candleCount; i++) {
//       const bullish = Math.random() > 0.5;
//       const color = bullish ? 0x22c55e : 0xef4444;

//       const bodyHeight = Math.random() * 0.35 + 0.25;
//       const wickHeight = bodyHeight + Math.random() * 0.3;

//       const body = new THREE.Mesh(
//         new THREE.BoxGeometry(0.08, bodyHeight, 0.05),
//         new THREE.MeshBasicMaterial({
//           color,
//           transparent: true,
//           opacity: 0.65,
//         })
//       );

//       const wick = new THREE.Mesh(
//         new THREE.CylinderGeometry(0.01, 0.01, wickHeight),
//         new THREE.MeshBasicMaterial({
//           color,
//           transparent: true,
//           opacity: 0.5,
//         })
//       );

//       const candle = new THREE.Group();
//       candle.add(wick);
//       candle.add(body);

//       candle.position.set(
//         (Math.random() - 0.5) * 14,
//         (Math.random() - 0.5) * 8,
//         (Math.random() - 0.5) * 6
//       );

//       candle.userData = {
//         speed: Math.random() * 0.002 + 0.001,
//         offset: Math.random() * Math.PI * 2,
//         baseY: candle.position.y,
//       };

//       candles.push(candle);
//       candlesGroup.add(candle);
//     }

//     // Mouse interaction
//     const targetRotation = { x: 0, y: 0 };

//     const onMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = -(e.clientY / window.innerHeight) * 2 + 1;

//       targetRotation.y = x * 0.25;
//       targetRotation.x = y * 0.15;
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     let time = 0;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.01;

//       // Floating animation
//       candles.forEach((candle) => {
//         candle.position.y =
//           candle.userData.baseY +
//           Math.sin(time + candle.userData.offset) * 0.25;
//       });

//       // Smooth mouse follow
//       candlesGroup.rotation.y +=
//         (targetRotation.y - candlesGroup.rotation.y) * 0.04;
//       candlesGroup.rotation.x +=
//         (targetRotation.x - candlesGroup.rotation.x) * 0.04;

//       // Gentle auto drift
//       candlesGroup.rotation.y += 0.00025;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", onMouseMove);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-70">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default AnimatedBackground;


import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const candlesGroup = new THREE.Group();
    scene.add(candlesGroup);

    const candles = [];
    const candleCount = 120;

    for (let i = 0; i < candleCount; i++) {
      const bullish = Math.random() > 0.5;
      const color = bullish ? 0x22c55e : 0xef4444;

      const bodyHeight = Math.random() * 0.35 + 0.25;
      const wickHeight = bodyHeight + Math.random() * 0.3;

      const bodyMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0,
      });

      const wickMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0,
      });

      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, bodyHeight, 0.05),
        bodyMaterial
      );

      const wick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, wickHeight),
        wickMaterial
      );

      const candle = new THREE.Group();
      candle.add(wick);
      candle.add(body);

      candle.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );

      candle.scale.set(0, 0, 0);

      candle.userData = {
        baseY: candle.position.y,
        offset: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.4,
        materialBody: bodyMaterial,
        materialWick: wickMaterial,
      };

      candles.push(candle);
      candlesGroup.add(candle);
    }

    // Mouse interaction
    const targetRotation = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRotation.y = x * 0.25;
      targetRotation.x = y * 0.15;
    };

    window.addEventListener("mousemove", onMouseMove);

    let time = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      candles.forEach((candle) => {
        const t = time * candle.userData.speed + candle.userData.offset;

        // Appear / disappear loop
        const visibility = Math.max(0, Math.sin(t));

        // Scale animation
        const scale = visibility * 0.9;
        candle.scale.set(scale, scale, scale);

        // Opacity animation
        candle.userData.materialBody.opacity = visibility * 0.65;
        candle.userData.materialWick.opacity = visibility * 0.45;

        // Floating
        candle.position.y =
          candle.userData.baseY + Math.sin(t) * 0.25;
      });

      // Smooth mouse follow
      candlesGroup.rotation.y +=
        (targetRotation.y - candlesGroup.rotation.y) * 0.04;
      candlesGroup.rotation.x +=
        (targetRotation.x - candlesGroup.rotation.x) * 0.04;

      // Gentle auto drift
      candlesGroup.rotation.y += 0.00025;
      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-70">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default AnimatedBackground;
