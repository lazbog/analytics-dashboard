import { AnalyticsCard } from "@/components/analytics-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, RefreshCw, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your key performance indicators and metrics
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <AnalyticsCard
            title="Total Revenue"
            value="$45,231.89"
            change={20.1}
            changeType="increase"
            icon="revenue"
          />
          <AnalyticsCard
            title="Active Users"
            value="2,350"
            change={180}
            changeType="increase"
            icon="users"
          />
          <AnalyticsCard
            title="Conversion Rate"
            value="12.5%"
            change={2.1}
            changeType="decrease"
            icon="trending"
          />
          <AnalyticsCard
            title="Bounce Rate"
            value="45.2%"
            change={4.3}
            changeType="decrease"
            icon="trending"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Revenue and user growth over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart visualization would go here
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest user actions and system events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      New user registration
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Payment received
                    </p>
                    <p className="text-sm text-muted-foreground">
                      5 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Server maintenance completed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Failed login attempt
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}