import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import OrderDetailsCard from "../../components/order-details-card/OrderDetailsCard";

const OrderList = () => {
  return (
    <React.Fragment>

      {/* Bread Crumbs (Start) */}
      <section className="py-6 border-b shadow-sm relative">
        <div className="container">
          <ul className="flex items-center justify-start space-x-3">
            <li><Link to={"/"} className="link">Home</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/dashboard"} className="link">Dashboard</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/orders"} className="link">My Orders</Link></li>
          </ul>
        </div>
      </section>
      {/* Bread Crumbs (End) */}

      {/* Orders Section (Start) */}
      <section className="relative py-10">
        <div className="container space-y-10">
          <div>
            <h1 className="font-semibold md:text-3xl sm:text-2xl">My Orders</h1>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-10 sm:gap-5">
            <OrderDetailsCard />
            <OrderDetailsCard />
            <OrderDetailsCard />
          </div>
        </div>
      </section>
      {/* Orders Section (End) */}

    </React.Fragment>
  );
}

export default OrderList;