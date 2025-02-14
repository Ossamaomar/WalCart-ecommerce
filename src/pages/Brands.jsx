import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import BrandsList from "../features/brands/BrandsList";
import { Helmet } from "react-helmet";

function Brands() {
  return (
    <div className="container px-4 mb-20 mx-auto flex flex-col justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Brands</title>
      </Helmet>
      <div className="flex justify-center mt-20 mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Brands</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="flex justify-center items-center">
        <BrandsList />
      </div>
    </div>
  );
}

export default Brands;
