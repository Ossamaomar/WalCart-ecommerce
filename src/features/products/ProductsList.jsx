import Spinner from "../../ui/Spinner";
import ProductCard from "./ProductCard";
import ProductsRow from "./ProductsRow";
import useProducts from "./useProducts";
import MoonLoader from "react-spinners/MoonLoader";

function ProductsList() {
  const { products, isLoading: isLoadingProducts } = useProducts();

  if (isLoadingProducts) return <Spinner />;

  const groupedByCategory = products.reduce((acc, product) => {
    const categoryName = product.category.name;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(product);

    return acc;
  }, {});

  const productsByCategory = Object.values(groupedByCategory);


  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-auto">
      {productsByCategory.map((products, i) => (
        <ProductsRow key={i} products={products} />
      ))}
    </div>
  );

}

export default ProductsList;
