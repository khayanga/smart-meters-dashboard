"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { meter: "m1", litres: 88, fill: "var(--color-m1)" },
  { meter: "m2", litres: 100, fill: "var(--color-m2)" },
  { meter: "m3", litres: 187, fill: "var(--color-m3)" },
  { meter: "m4", litres: 170, fill: "var(--color-m4)" },
  { meter: "other", litres: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  litres: {
    label: "litres",
  },
  m1: {
    label: "m1",
    color: "hsl(var(--chart-1))",
  },
  m2: {
    label: "m2",
    color: "hsl(var(--chart-2))",
  },
  m3: {
    label: "m3",
    color: "hsl(var(--chart-3))",
  },
  m4: {
    label: "m4",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ConsumersChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Top Consumers</CardTitle>
        <CardDescription>Feburary {new Date().getFullYear()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="meter"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="litres" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="litres" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total litres for the last 24hrs
        </div>
      </CardFooter>
    </Card>
  )
}
