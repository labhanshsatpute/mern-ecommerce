import React from "react";
import ProductCard from "../product-card/ProductCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductSection = () => {
  return (
    <React.Fragment>
      <section className="md:pb-20 sm:pb-10">
        <div className="container md:space-y-10 sm:space-y-5">

          <div>
            <h1 className="text-center">
              <span className="md:text-4xl sm:text-3xl font-bold">Explore Our </span>
              <span class="font-bold text-transparent md:text-4xl sm:text-3xl bg-clip-text bg-gradient-to-r from-ascent to-ascent-dark">Products</span>
            </h1>
          </div>

          <div>
            <Tabs>
              <TabList className={"home-products-tabs"}>
                <Tab>Featured</Tab>
                <Tab>Best Seller</Tab>
                <Tab>Trending</Tab>
              </TabList>

              <TabPanel>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                  <ProductCard />
                  <ProductCard />
                </div>
              </TabPanel>
            </Tabs>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductSection;