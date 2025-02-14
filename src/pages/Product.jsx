import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import ProductDetails from "../features/products/ProductDetails";
import { Helmet } from "react-helmet";

function Product() {
  return (
    <div className="container px-4 mb-20 mx-auto flex flex-col justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Product Details</title>
      </Helmet>
      <div className="flex justify-center mt-20 mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Product Details</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div>
        <ProductDetails />
      </div>
    </div>
  );
}

export default Product;
