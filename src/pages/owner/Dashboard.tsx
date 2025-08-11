import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OwnerDashboard = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "facility_owner") {
    const target = user.role === "admin" ? "/dashboard/admin" : "/dashboard/user";
    return <Navigate to={target} replace />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Facility Owner Dashboard | QuickCourt</title>
        <meta name="description" content="Facility owner dashboard to manage courts, availability, and earnings on QuickCourt." />
        <link rel="canonical" href="/dashboard/facility" />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Facility Owner Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage courts, availability, and view earnings.</p>
      </header>

      <main className="space-y-6">
        <section className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Active Courts</CardTitle>
            </CardHeader>
            <CardContent><p className="text-3xl font-bold">—</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent><p className="text-3xl font-bold">—</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            </CardHeader>
            <CardContent><p className="text-3xl font-bold">—</p></CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Booking Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-md bg-muted" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm">Add Facility</Button>
                <Button variant="secondary" size="sm">Manage Courts</Button>
                <Button variant="secondary" size="sm">Set Time Slots</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Court 1 (Badminton) — Today 5:00 PM</li>
                <li>• Turf A (Football) — Tomorrow 7:30 PM</li>
                <li>• Table 2 (Table Tennis) — Thu 6:00 PM</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default OwnerDashboard;
