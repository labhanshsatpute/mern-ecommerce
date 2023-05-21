import React from "react";
import ProductCard from "../product-card/ProductCard";

const ProductSection = () => {
  return (
    <React.Fragment>
      <section className="md:py-16 sm:py-10">
        <div className="container">
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductSection;