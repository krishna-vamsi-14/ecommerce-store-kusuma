import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description 1",
    isAvailableForPurchase: true,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Description 2",
    isAvailableForPurchase: false,
  },
];

export const ProductTable = () => {
  return (
    <Table className="border-[0.5px] border-gray-200 rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>Available for Purchase</TableHead>
          <TableHead className="py-4">Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Description</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell className="py-4 px-8">
                {product.isAvailableForPurchase ? (
                  <CheckCircle2 />
                ) : (
                  <XCircle />
                )}
              </TableCell>
              <TableCell className="py-4">{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <MoreVertical className="cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-100 border-none">
                    <DropdownMenuItem className="hover:bg-gray-300 px-4 py-2">
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-300 px-4 py-2">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-300 px-4 py-2">
                      Deactivate
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-red-500 hover:text-white px-4 py-2">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
