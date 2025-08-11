import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";

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

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Upcoming Bookings</h2>
          <p className="text-muted-foreground mt-2">No bookings yet.</p>
        </section>
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Suggested Venues</h2>
          <p className="text-muted-foreground mt-2">Coming soon.</p>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
