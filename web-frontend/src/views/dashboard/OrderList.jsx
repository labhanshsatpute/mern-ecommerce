import React from "react";
import OrderDetailsCard from "../../components/order-details/OrderDetailsCard";

const OrderList = () => {
  return (
    <React.Fragment>
      <div className="space-y-3">
        <OrderDetailsCard />
        <OrderDetailsCard />
        <OrderDetailsCard />
      </div>
    </React.Fragment>
  );
}

export default OrderList;