import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "user") {
    const target = user.role === "admin" ? "/dashboard/admin" : "/dashboard/facility";
    return <Navigate to={target} replace />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>User Dashboard | QuickCourt</title>
        <meta name="description" content="Your QuickCourt dashboard with upcoming bookings and recommendations." />
        <link rel="canonical" href="/dashboard/user" />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <p className="text-muted-foreground mt-2">See your upcoming bookings and explore venues.</p>
      </header>

      <main className="space-y-6">
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">No bookings yet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/venues">Browse Venues</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link to="/bookings">My Bookings</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Venues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="h-24 rounded-md bg-muted" />
                <div className="h-24 rounded-md bg-muted" />
                <div className="h-24 rounded-md bg-muted" />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
