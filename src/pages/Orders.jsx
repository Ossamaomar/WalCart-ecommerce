import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import OrderDisplay from "../features/orders/OrderDisplay";
import { Helmet } from "react-helmet";

function Orders() {
  return (
    <div className="my-20 w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Orders</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Orders</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <OrderDisplay />
    </div>
  );
}

export default Orders;
