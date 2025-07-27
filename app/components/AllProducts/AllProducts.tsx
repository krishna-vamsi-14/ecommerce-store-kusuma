import { ProductCard } from "../ProductCard/ProductCard";

export const AllProducts = () => {
  return (
    <div className="pt-8 md:pt-24 pb-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">All Products</h1>
      <p className="text-gray-500 mt-2 text-center px-6 md:px-0">
        Discover our newest collection of handcrafted jewelry pieces
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-6 md:px-0">
        <ProductCard
          image={"/images/kusuma-img-1.jpg"}
          title={"Kusuma Necklace"}
          description={"A beautiful necklace with a kusuma design"}
          price={100}
        />
        <ProductCard
          image={"/images/kusuma-img-2.jpg"}
          title={"Kusuma Bracelet"}
          description={"A beautiful bracelet with a kusuma design"}
          price={100}
        />
        <ProductCard
          image={"/images/kusuma-img-3.jpeg"}
          title={"Kusuma Ring"}
          description={"A beautiful ring with a customized design"}
          price={100}
        />
        <ProductCard
          image={"/images/kusuma-img-4.jpeg"}
          title={"Kusuma Earrings"}
          description={"A beautiful earrings with a kusuma design"}
          price={100}
        />
        <ProductCard
          image={"/images/rakhi-1.webp"}
          title={"Rakshabhan"}
          description={"A beautiful Rakhi with a customized design"}
          price={100}
        />
        <ProductCard
          image={"/images/rakhi-2.webp"}
          title={"Rakshabhan"}
          description={"A beautiful Rakhi with a customized design"}
          price={100}
        />
        <ProductCard
          image={"/images/rakhi-3.webp"}
          title={"Rakshabhan"}
          description={"A beautiful Rakhi with a customized design"}
          price={100}
        />
        <ProductCard
          image={"/images/rakhi-4.webp"}
          title={"Rakshabhan"}
          description={"A beautiful Rakhi with a customized design"}
          price={100}
        />
      </div>
    </div>
  );
};
