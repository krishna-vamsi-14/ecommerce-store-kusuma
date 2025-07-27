import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  