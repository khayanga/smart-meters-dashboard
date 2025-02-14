"use client";
import Wave from "react-wavify";

const WaterWave = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden rounded-xl">
      {/* Back Wave (Lighter & Slightly Lower) */}
      <Wave
        fill="#80CED7"
        paused={false}
        style={{ position: "absolute", bottom: 0, width: "100%", opacity: 0.5 }}
        options={{
          height: 70,
          amplitude: 25,
          speed: 0.15,
          points: 4,
        }}
      />

      {/* Front Wave (Darker & Higher) */}
      <Wave
        fill="#1481BA"
        paused={false}
        style={{ position: "absolute", bottom: 0, width: "100%" }}
        options={{
          height: 80,
          amplitude: 30,
          speed: 0.2,
          points: 6,
        }}
      />
    </div>
  );
};

export default WaterWave;

