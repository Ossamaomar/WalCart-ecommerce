import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../../services/apiBrands";

function useBrands() {
  const { isLoading, data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  return { isLoading, brands };
}

export default useBrands;
