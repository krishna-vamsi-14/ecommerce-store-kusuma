import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader/PageHeader";
import Link from "next/link";
import { ProductTable } from "./_components/ProductTable";

export default function AdminProductsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <PageHeader title="Products" description="Manage your products" />
        <Button variant="secondary" className="bg-gray-800 text-white" asChild>
          <Link href="/admin/products/new">Add New Product</Link>
        </Button>
      </div>

      <ProductTable />
    </div>
  );
}
