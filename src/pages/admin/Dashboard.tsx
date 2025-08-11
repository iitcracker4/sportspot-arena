import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "admin") {
    const target =
      user.role === "facility_owner" ? "/dashboard/facility" : "/dashboard/user";
    return <Navigate to={target} replace />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Admin Dashboard | QuickCourt</title>
        <meta name="description" content="Admin dashboard for managing users, facilities, and bookings on QuickCourt." />
        <link rel="canonical" href="/dashboard/admin" />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of platform metrics and moderation actions.</p>
      </header>

      <main className="space-y-6">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent><p className="text-3xl font-bold">—</p></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Facility Owners</CardTitle>
            </CardHeader>
            <CardContent><p className="text-3xl font-bold">—</p></CardContent>
          </Card>
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
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Booking Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 rounded-md bg-muted" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>User Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 rounded-md bg-muted" />
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Moderation Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• 2 facility approvals pending</li>
                <li>• 1 reported review awaiting action</li>
                <li>• 3 user verifications to review</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
