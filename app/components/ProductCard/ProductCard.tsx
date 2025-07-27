import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export type ProductCardProps = {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
};

export const ProductCard = ({
  image,
  title,
  price,
  description,
}: ProductCardProps) => {
  return (
    <div className="h-[420px] w-full bg-gray-100 rounded-lg shadow-md overflow-hidden">
      {image && (
        <Image
          src={image || ""}
          alt={title || ""}
          width={300}
          height={350}
          className="w-full object-cover h-[60%]"
        />
      )}
      <div className="p-4 flex flex-col gap-[8px]">
        <div className="flex flex-col gap-2">
          {title && <h3 className="text-lg font-bold">{title}</h3>}
          {description && <p className="text-gray-500">{description}</p>}
        </div>
        {price && <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-yellow-500">{`$${price}`}</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            Add <ShoppingCart className="w-4 h-4" />
          </button>
        </div>}
      </div>
    </div>
  );
};
