"use client"

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home page </h1>
      <Button> Click me</Button>
      <ModeToggle/>
    </div>
  );
}
