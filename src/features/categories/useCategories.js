import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/apiCategories";

function useCategories() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return { isLoading, categories };
}

export default useCategories;