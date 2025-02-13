"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClockCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-sm p-4 text-center shadow-lg bg-blue-500">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Current Time</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{time.toLocaleTimeString()}</p>
        <p className="text-md text-gray-200">{time.toDateString()}</p>
      </CardContent>
    </Card>
  );
};

export default ClockCard;
