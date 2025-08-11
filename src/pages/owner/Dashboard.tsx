import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";

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
        <title>Facility Dashboard | QuickCourt</title>
        <meta name="description" content="Facility owner dashboard to manage courts, pricing, and bookings on QuickCourt." />
        <link rel="canonical" href="/dashboard/facility" />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Facility Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage courts, availability, and view earnings.</p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Active Courts</h2>
          <p className="text-3xl font-bold mt-2">—</p>
        </section>
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Total Bookings</h2>
          <p className="text-3xl font-bold mt-2">—</p>
        </section>
        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Earnings</h2>
          <p className="text-3xl font-bold mt-2">—</p>
        </section>
      </main>
    </div>
  );
};

export default OwnerDashboard;
