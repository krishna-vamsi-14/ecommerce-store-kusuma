import { Heart, ShoppingCart, User } from "lucide-react"
import Link from "next/link"

export const CustomerFacingNavBar = () => {
    return (
        <div className="backdrop-blur-sm bg-white/70 border-b border-yellow-200 shadow-md fixed top-0 left-0 right-0 z-50 h-[70px] flex justify-between items-center px-4 md:px-12 lg:px-48">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Kusuma's Store
            </div>
            <div className="flex gap-8">
                <Link href="/wishlist"><Heart className="w-4 h-4" /></Link>
                <Link href="/orders"><ShoppingCart className="w-4 h-4" /></Link>
                <Link href="/login"><User className="w-4 h-4" /></Link>
            </div>
        </div>
    )
}