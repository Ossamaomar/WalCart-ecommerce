import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";

function useProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return { isLoading, products };
}

export default useProducts;
