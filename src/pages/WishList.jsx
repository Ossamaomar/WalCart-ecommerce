import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import WishlistItems from "../features/wishlist/WishlistItems";
import { Helmet } from "react-helmet";

function WishList() {
  return (
    <div className="my-20 w-full flex flex-col justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Wishlist</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Wishlist</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <WishlistItems />
    </div>
  );
}

export default WishList;
