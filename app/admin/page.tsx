import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "../globals.css";

export default function AdminPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AdminDashboardCard
          title="Sales"
          description={`${0} Orders`}
          value={1000}
        />
        <AdminDashboardCard
          title="Customers"
          description={`${0} Average Value`}
          value={100}
        />
        <AdminDashboardCard
          title="Active Products"
          description={`${0} Inactive Products`}
          value={100}
        />
      </div>
    </div>
  );
}

export type AdminDashboardCardProps = {
  title: string;
  description: string;
  value: number;
};

export const AdminDashboardCard = ({
  title,
  description,
  value,
}: AdminDashboardCardProps) => {
  return (
    <Card className="w-full border-gray-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};
