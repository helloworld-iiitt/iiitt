"use client";
import React, { useEffect, useMemo, useState } from "react";

interface LiveStreamPopupProps {
  youtubeUrl: string;
  eventDate: Date;
  durationMins: number;
}

export default function LiveStreamPopup({
  youtubeUrl,
  eventDate,
  durationMins,
}: LiveStreamPopupProps) {
  const [now, setNow] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();
      setNow(current);

      const endTime = new Date(eventDate.getTime() + durationMins * 60000);
      if (current >= eventDate && current <= endTime) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate, durationMins]);

  // Countdown
  const countdown = useMemo(() => {
    const diff = eventDate.getTime() - now.getTime();
    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }, [eventDate, now]);

  return (
    <>
      {/* Countdown Banner */}
      {countdown && !showPopup && (
        <div style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "#111",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          fontSize: "14px",
          zIndex: 50
        }}>
          🎥 Live in {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </div>
      )}

      {/* Live Stream Popup */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100
        }}>
          <div style={{
            background: "#000",
            borderRadius: "12px",
            overflow: "hidden",
            maxWidth: "90%",
            maxHeight: "80%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            position: "relative"
          }}>
            <iframe
              width="800"
              height="450"
              src={`${youtubeUrl}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
              title="Live Event Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none", display: "block" }}
            />

            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
