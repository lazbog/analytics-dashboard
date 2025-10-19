import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react"

interface AnalyticsCardProps {
  title: string
  value: string | number
  change?: number
  changeType?: 'increase' | 'decrease'
  icon?: 'users' | 'revenue' | 'trending'
}

export function AnalyticsCard({
  title,
  value,
  change,
  changeType = 'increase',
  icon = 'trending',
}: AnalyticsCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return <Users className="h-4 w-4 text-muted-foreground" />
      case 'revenue':
        return <DollarSign className="h-4 w-4 text-muted-foreground" />
      case 'trending':
      default:
        return changeType === 'increase' ? (
          <TrendingUp className="h-4 w-4 text-green-600" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-600" />
        )
    }
  }

  const getChangeColor = () => {
    return changeType === 'increase' ? 'text-green-600' : 'text-red-600'
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <p className={`text-xs ${getChangeColor()}`}>
            {changeType === 'increase' ? '+' : '-'}{Math.abs(change)}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}