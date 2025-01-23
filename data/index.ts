import {  Building, CircleUserRound, Files, Home,  MapPin, MapPinHouse, Timer } from "lucide-react"

export const items = [
    {
      title: "Home",
      url: "/client-dashboard",
      icon: Home,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: CircleUserRound ,
    },
    {
      title: "Sites",
      url: "/site",
      icon: MapPin,
    },
    {
      title: "Meters",
      url: "/meters",
      icon: Timer,
    },
    {
      title: "Establishmets",
      url: "/establishments",
      icon: Building,
    },
    {
      title: "Occupancy",
      url: "/occupancy",
      icon: MapPinHouse,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: Files,
    },
  ]