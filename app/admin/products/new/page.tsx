import { PageHeader } from "../../_components/PageHeader/PageHeader";
import { ProductForm } from "../_components/ProductForm";

export default function AddNewProductPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <PageHeader title="Add New Product" description="Create a new product" />
            <ProductForm />
        </div>
    )
}