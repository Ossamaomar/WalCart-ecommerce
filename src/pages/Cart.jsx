import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import CartList from "../features/cart/CartList";
import { Helmet } from "react-helmet";

function Cart() {
  return (
    <div className="my-20 mx-auto w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Cart</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Cart</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <CartList />
    </div>
  );
}

export default Cart;
