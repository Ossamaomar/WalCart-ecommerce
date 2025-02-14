/* eslint-disable react/prop-types */
import { TableCell, TableRow } from "flowbite-react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import useDeleteCartItem from "./useDeleteItem";
import useUpdateItemQuantity from "./useUpdateItemQuantity";
import { useUserContext } from "../../contexts/UserContext";


function CartRow({ cartItem }) {
  const {userToken} = useUserContext();
  const { deleteCartItemMutateFn, isPending: isLoadingDeletingItem } =
    useDeleteCartItem();
  const { updateItemQuantityMutateFn, isPending: isLoadingUpdatingItem } =
    useUpdateItemQuantity();

  function handleQuantityUpdate(type) {
    if (type === "inc") {
      updateItemQuantityMutateFn({
        productId: cartItem.product._id,
        count: cartItem.count+1,
        userToken,
      });
    } else if (type === "dec") {
      updateItemQuantityMutateFn({
        productId: cartItem.product._id,
        count: cartItem.count-1,
        userToken,
      });
    }
  }
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <img className="h-[100px]" src={cartItem.product.imageCover} alt="" />
      </TableCell>
      <TableCell>{cartItem.product.category.name}</TableCell>
      <TableCell>{cartItem.price} EGP</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <button
            disabled={isLoadingUpdatingItem}
            onClick={() => handleQuantityUpdate("dec")}
          >
            <CiCircleMinus size={22} color="#7E22CE" />
          </button>
          <span className="bg-gray-400 bg-opacity-20 text-black text-medium border-2 border-purple-600 px-2 py-[2px] rounded-md dark:text-white">
            {cartItem.count}
          </span>
          <button
            disabled={isLoadingUpdatingItem}
            onClick={() => handleQuantityUpdate("inc")}
          >
            <CiCirclePlus size={22} color="#7E22CE" />
          </button>
        </div>
      </TableCell>
      <TableCell>
        <button
          disabled={isLoadingDeletingItem}
          onClick={() => deleteCartItemMutateFn({productId: cartItem.product._id, userToken})}
        >
          <BsTrash size={22} className="text-red-600" />
        </button>
      </TableCell>
    </TableRow>
  );
}

export default CartRow;
