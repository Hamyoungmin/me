'use client';

import { useRef, useEffect } from 'react';

interface BootScreenProps {
  onBootComplete: () => void;
}

export default function BootScreen({ onBootComplete }: BootScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 동영상 재생 완료 시 메인 페이지로 전환
    const handleVideoEnd = () => {
      onBootComplete();
    };

    video.addEventListener('ended', handleVideoEnd);

    // 자동 재생 시작
    video.play().catch(error => {
      console.error('동영상 자동 재생 실패:', error);
      // 자동 재생이 실패하면 3초 후에 메인 페이지로 전환
      setTimeout(onBootComplete, 3000);
    });

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [onBootComplete]);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={onBootComplete}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source src="/4dea me.mp4" type="video/mp4" />
      </video>
    </div>
  );
}