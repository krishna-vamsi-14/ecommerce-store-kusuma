'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addProduct } from "../../_actions/products"
import { useFormState, useFormStatus } from "react-dom"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

export const ProductForm = () => {

    const [state, formAction] = useActionState(addProduct, null);

    useEffect(() => {
        console.log('state');
        console.log(state);
    }, [state]);

    return (
        <form className="flex flex-col space-y-8 max-w-2xl" action={formAction}>
            <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name="name" required className="border-gray-300"/>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="priceInRupees">Price in Rupees</Label>
                <Input id="priceInRupees" type="number" name="priceInRupees" required className="border-gray-300"/>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required className="border-gray-300" rows={4}/>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="file">File</Label>
                <Input type="file" id="file" name="file" required className="border-gray-300"/>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required className="border-gray-300"/>
            </div>

            <SubmitButton />

        </form>
    )
}

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="bg-gray-800 text-white" disabled={pending}>
            {pending ? "Creating..." : "Create Product"}
        </Button>
    )
}