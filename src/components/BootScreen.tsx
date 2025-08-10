'use client';

import { useEffect, useState } from 'react';

interface BootScreenProps {
  onBootComplete: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function BootScreen({ onBootComplete }: BootScreenProps) {
  const [bootStage, setBootStage] = useState<'loading' | 'expanding' | 'completed'>('loading');
  const [atomParticles, setAtomParticles] = useState<Particle[]>([]);

  // 아크 리액터 원자 구체 생성
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const sphereRadius = 200; // 아크 리액터 크기
    const centerX = window.innerWidth / 2; // 화면 중앙 X
    const centerY = window.innerHeight / 2; // 화면 중앙 Y
    
    const atoms: Particle[] = [];
    let atomId = 0;
    
    // 아크 리액터 스타일 원자 배치 (더욱 조밀하게)
    const latitudeLines = 40;
    const longitudePoints = 60;
    
    for (let lat = 0; lat < latitudeLines; lat++) {
      for (let lon = 0; lon < longitudePoints; lon++) {
        // 구면 좌표계로 원자 배치
        const phi = (Math.PI * lat) / (latitudeLines - 1);
        const theta = (2 * Math.PI * lon) / longitudePoints;
        
        // 3D 좌표 계산
        const x3d = sphereRadius * Math.sin(phi) * Math.cos(theta);
        const y3d = sphereRadius * Math.sin(phi) * Math.sin(theta);
        const z3d = sphereRadius * Math.cos(phi);
        
        // 2D 투영
        const x = centerX + x3d;
        const y = centerY + y3d;
        
        // 아크 리액터 스타일 깊이 효과
        const depthFactor = (z3d + sphereRadius) / (2 * sphereRadius);
        const atomSize = 4 + (depthFactor * 8); // 뒤: 4px, 앞: 12px
        const opacity = 0.2 + (depthFactor * 0.8);
        
        // 아크 리액터 블루 색상 (중심에서 바깥으로 갈수록 더 밝게)
        const distanceFromCenter = Math.sqrt(x3d * x3d + y3d * y3d) / sphereRadius;
        const coreIntensity = 1 - distanceFromCenter * 0.3;
        const blueIntensity = Math.floor(100 + (depthFactor * 155));
        const cyanIntensity = Math.floor(150 + (coreIntensity * 105));
        const atomColor = `rgb(${Math.floor(blueIntensity * 0.3)}, ${cyanIntensity}, ${blueIntensity})`;
        
        // 폭발 방향 벡터
        const dirX = Math.sin(phi) * Math.cos(theta);
        const dirY = Math.sin(phi) * Math.sin(theta);
        
        atoms.push({
          id: atomId++,
          x: x,
          y: y,
          vx: dirX * (Math.random() * 4 + 6),
          vy: dirY * (Math.random() * 4 + 6),
          size: atomSize,
          opacity: opacity,
          color: atomColor
        });
      }
    }
    
    setAtomParticles(atoms);
  }, []);

  useEffect(() => {
    // 아크 리액터 부팅 시퀀스
    const bootSequence = async () => {
      // 1단계: 아크 리액터 로딩 (4초)
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // 2단계: 아크 리액터 에너지 폭발 확장
      setBootStage('expanding');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 3단계: 홈페이지로 전환
      setBootStage('completed');
      await new Promise(resolve => setTimeout(resolve, 500));
      onBootComplete();
    };

    bootSequence();
  }, [onBootComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      
      {bootStage === 'loading' && (
        <div className="relative w-full h-full z-10">
          {/* 아크 리액터 중심 글로우 */}
          <div 
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 200, 255, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'reactorPulse 3s ease-in-out infinite'
            }}
          />
          
          {/* 아크 리액터 원자 구체 */}
          {atomParticles.map(atom => (
            <div
              key={atom.id}
              className="absolute rounded-full"
              style={{
                left: `${atom.x}px`,
                top: `${atom.y}px`,
                width: `${atom.size}px`,
                height: `${atom.size}px`,
                backgroundColor: atom.color,
                opacity: atom.opacity,
                boxShadow: `0 0 ${atom.size * 2}px ${atom.color}, 0 0 ${atom.size * 4}px ${atom.color}`,
                transform: 'translate(-50%, -50%)',
                animation: 'atomFloat 3s ease-in-out infinite, reactorGlow 2s ease-in-out infinite'
              }}
            />
          ))}
          
          {/* 아크 리액터 중심 코어 */}
          <div 
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              background: 'radial-gradient(circle, #00ffff 0%, #0080ff 50%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 20px #00ffff, 0 0 40px #0080ff, 0 0 60px #0040ff',
              animation: 'coreGlow 2s ease-in-out infinite'
            }}
          />
        </div>
      )}

      {bootStage === 'expanding' && (
        <div className="relative w-full h-full z-10">
          {/* 확장하는 에너지 웨이브 */}
          <div 
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 128, 255, 0.4) 50%, transparent 100%)',
              borderRadius: '50%',
              animation: 'energyExplosion 2s ease-out forwards'
            }}
          />
          
          {/* 확장하는 원자들 */}
          {atomParticles.map(atom => (
            <div
              key={atom.id}
              className="absolute rounded-full"
              style={{
                left: `${atom.x}px`,
                top: `${atom.y}px`,
                width: `${atom.size}px`,
                height: `${atom.size}px`,
                backgroundColor: atom.color,
                opacity: atom.opacity,
                boxShadow: `0 0 ${atom.size * 4}px ${atom.color}, 0 0 ${atom.size * 8}px ${atom.color}`,
                transform: 'translate(-50%, -50%)',
                animation: 'atomExpand 2s ease-out forwards'
              }}
            />
          ))}
        </div>
      )}

      {/* CSS 애니메이션 */}
      <style jsx>{`
        @keyframes reactorPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        @keyframes atomFloat {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) scale(1);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-2px) scale(1.03);
          }
        }
        
        @keyframes reactorGlow {
          0%, 100% { 
            filter: brightness(1) saturate(1.2);
          }
          50% { 
            filter: brightness(1.5) saturate(1.8);
          }
        }
        
        @keyframes coreGlow {
          0%, 100% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 20px #00ffff, 0 0 40px #0080ff, 0 0 60px #0040ff;
          }
          50% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
            box-shadow: 0 0 30px #00ffff, 0 0 60px #0080ff, 0 0 100px #0040ff;
          }
        }
        
        @keyframes energyExplosion {
          0% { 
            width: 100px;
            height: 100px;
            opacity: 1;
          }
          100% { 
            width: 3000px;
            height: 3000px;
            opacity: 0;
          }
        }
        
        @keyframes atomExpand {
          0% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(2);
            opacity: 0.8;
          }
          100% { 
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}