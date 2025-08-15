"use client";
import React, { useEffect, useMemo, useState } from "react";

interface LiveStreamProps {
  youtubeUrl: string;
  eventDate: Date;
  durationMins: number;
  fallback: React.ReactNode; // Replaces carousel
}

export default function LiveStream({
  youtubeUrl,
  eventDate,
  durationMins,
  fallback,
}: LiveStreamProps) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const endTime = useMemo(
    () => new Date(eventDate.getTime() + durationMins * 60000),
    [eventDate, durationMins]
  );

  const isDuring = now >= eventDate && now <= endTime;

  if (isDuring) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-xl border bg-black">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`${youtubeUrl}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
            title="Live Event Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // Before or after event, show fallback
  return <>{fallback}</>;
}
