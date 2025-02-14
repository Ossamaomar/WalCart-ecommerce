import { useParams } from "react-router-dom";
import useProducts from "../products/useProducts";
import MoonLoader from "react-spinners/MoonLoader";
import ProductCard from "../products/ProductCard";
import NoProductsInCategory from "./NoProductsInCategory";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import useCategories from "./useCategories";
import { Helmet } from "react-helmet";

function CategoryProducts() {
  const { categoryID } = useParams();
  const { products, isLoading } = useProducts();
  const { categories, isLoading: isLoadingCategories } = useCategories();

  if (isLoading || isLoadingCategories) return <MoonLoader color="#7E22CE" />;

  const categoryName = categories.filter(
    (category) => category._id === categoryID
  );

  const categoryProducts = products.filter(
    (product) => product.category._id === categoryID
  );

  if (categoryProducts.length === 0) return <NoProductsInCategory />;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | {categoryName[0].name}</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Category</BreadcrumbItem>
          <BreadcrumbItem>{categoryName[0].name}</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </>
  );
}

export default CategoryProducts;
