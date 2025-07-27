'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavBar = () => {


    const pathName = usePathname();

    console.log(pathName);

    return (
        <div className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between md:items-center">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">
                Ecommerce Store
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <Link href="/admin" className={pathName === '/admin' ? 'text-blue-800 bg-blue-200 px-4 py-2 rounded-md' : ''}>Dashboard</Link>
                <Link href="/admin/products" className={pathName === '/admin/products' ? 'text-blue-800 bg-blue-200 px-4 py-2 rounded-md' : ''}>Products</Link>
                <Link href="/admin/customers" className={pathName === '/admin/customers' ? 'text-blue-800 bg-blue-200 px-4 py-2 rounded-md' : ''}>Customers</Link>
                <Link href="/admin/sales" className={pathName === '/admin/sales' ? 'text-blue-800 bg-blue-200 px-4 py-2 rounded-md' : ''}>Sales</Link>
            </div>
        </div>
    )
}