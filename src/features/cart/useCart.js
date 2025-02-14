import { useQuery } from "@tanstack/react-query";
import { getLoggedUserCart } from "../../services/apiCart";


function useCart(userToken) {
  const { isLoading, data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getLoggedUserCart(userToken),
    enabled: !!userToken
  });

  return { isLoading, cart };
}

export default useCart;
