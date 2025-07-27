import { redirect } from "next/navigation";
import { z } from "zod";

const addProductSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    priceInRupees: z.coerce.number().min(1, { message: "Price should be greater than 1" }),
    description: z.string().min(1, { message: "Description is required" }),
    file: z.instanceof(File),
    image: z.instanceof(File),
})

export async function addProduct(_prevState: any, formData: FormData): Promise<any> {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(formData);

    const validatedFields = addProductSchema.safeParse({
        name: formData.get("name"),
        priceInRupees: formData.get("priceInRupees"),
        description: formData.get("description"),
        file: formData.get("file"),
        image: formData.get("image"),
    });

    console.log(validatedFields);

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, priceInRupees, description, file, image } = validatedFields.data;

    redirect("/admin/products");
}