'use client';

import { useEffect, useRef } from 'react';

export default function Sphere3D() {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * -20;
      
      sphere.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
      <div 
        ref={sphereRef}
        className="sphere-3d"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(128, 128, 128, 0.2), transparent 50%),
            linear-gradient(45deg, #2a2a2a, #1a1a1a, #0a0a0a)
          `,
          boxShadow: `
            inset -20px -20px 50px rgba(0, 0, 0, 0.7),
            inset 20px 20px 50px rgba(255, 255, 255, 0.1),
            0 0 100px rgba(64, 64, 64, 0.3),
            0 0 200px rgba(32, 32, 32, 0.1)
          `,
          animation: 'sphereFloat 6s ease-in-out infinite, sphereRotate 20s linear infinite',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 구체 표면의 추가 효과들 */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.4) 0%, transparent 30%)',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 60%, rgba(128, 128, 128, 0.3) 0%, transparent 40%)',
            filter: 'blur(4px)'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes sphereFloat {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) scale(1);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes sphereRotate {
          0% { 
            filter: hue-rotate(0deg);
          }
          100% { 
            filter: hue-rotate(360deg);
          }
        }
        
        .sphere-3d {
          transition: transform 0.3s ease-out;
        }
        
        .sphere-3d::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(128, 128, 128, 0.1) 0%, transparent 70%);
          filter: blur(20px);
          animation: spherePulse 4s ease-in-out infinite;
        }
        
        @keyframes spherePulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
