import { ProductCard } from "../ProductCard/ProductCard"

export const MostOrdered = () => {
    return (
        <div className="pt-8 md:pt-24 pb-24 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center">{`Raksha Bandhan Special`}</h1>
            <p className="text-gray-500 mt-2 text-center px-6 md:px-0">Discover our most popular collection of handcrafted jewelry pieces</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-6 md:px-0">
                <ProductCard image={"/images/rakhi-1.webp"} title={"Rakshabhan"} description={"A beautiful Rakhi with a customized design"} price={100} />
                <ProductCard image={"/images/rakhi-2.webp"} title={"Rakshabhan"} description={"A beautiful Rakhi with a customized design"} price={100} />
                <ProductCard image={"/images/rakhi-3.webp"} title={"Rakshabhan"} description={"A beautiful Rakhi with a customized design"} price={100} />
                <ProductCard image={"/images/rakhi-4.webp"} title={"Rakshabhan"} description={"A beautiful Rakhi with a customized design"} price={100} />
            </div>
        </div>
    )
}