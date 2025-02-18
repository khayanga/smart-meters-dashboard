"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "January",  litres: 80 },
  { month: "February",  litres: 50 },
  { month: "March",  litres: 120 },
  { month: "April",  litres: 90 },
  { month: "May",  litres: 130 },
  { month: "June",  litres: 40 },
  { month: "January",  litres: 80 },
  { month: "February",  litres: 50 },
  { month: "March",  litres: 120 },
  { month: "January",  litres: 80 },
  { month: "February",  litres: 50 },
  { month: "March",  litres: 120 },
]

const chartConfig = {
 
  litres: {
    label: "Litres",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Consumption() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Consumption </CardTitle>
        <CardDescription>
          Showing total consumption for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="litres"
              type="natural"
              fill="var(--color-litres)"
              fillOpacity={0.4}
              stroke="var(--color-litres)"
              stackId="a"
            />
            
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
