import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import useClearCart from "./useClearCart";
import { useUserContext } from "../../contexts/UserContext";

function CartOptions() {
  const {userToken} = useUserContext()
  const {clearCartMutateFn, isPending} = useClearCart();

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button className="bg-purple-600 text-white"><Link to={'/'}>Return to shop </Link></Button>
      <Button isDisabled={isPending} onPress={() => clearCartMutateFn(userToken)} className="bg-transparent transition-all duration-400 border-2 border-red-600 hover:bg-red-600 hover:text-white">
        Clear Cart
      </Button>
    </div>
  );
}

export default CartOptions;
