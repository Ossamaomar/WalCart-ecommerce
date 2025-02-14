import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../services/apiOrders";

function useUserOrders() {
  const userId = localStorage.getItem("userId").replace(/^"|"$/g, ''); ;
  const { isLoading, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getUserOrders(userId),
  });

  return { isLoading, orders };
}

export default useUserOrders;
