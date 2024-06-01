import { Navbar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[92%] max-w-[1200px] mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
