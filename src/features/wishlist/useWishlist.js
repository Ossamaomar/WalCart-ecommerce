import { useQuery } from "@tanstack/react-query";
import { getLoggedUserWishlist } from "../../services/apiWishlist";


function useWishlist(userToken) {
  const { isLoading, data: wishlist } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getLoggedUserWishlist(userToken),
    enabled: !!userToken
  });

  return { isLoading, wishlist };
}

export default useWishlist;
