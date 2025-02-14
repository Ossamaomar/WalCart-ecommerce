/* eslint-disable react/prop-types */
import { TableCell, TableRow } from "flowbite-react";
import { useUserContext } from "../../contexts/UserContext";
import { FaRegTrashCan } from "react-icons/fa6";
import useAddProduct from "../cart/useAddProduct";
import useDeleteWishlistProduct from "./useDeleteWishlistProduct";

function WishlistRow({ product }) {
  const { userToken } = useUserContext();
  const { addProductMutatFn, isPending: isAddingProduct } = useAddProduct();
  const { deleteProductFromWishlistMutateFn, isPending: isDeletingProduct } =
    useDeleteWishlistProduct();

  function handleAddProduct() {
    addProductMutatFn({ productId: product._id, userToken });
    deleteProductFromWishlistMutateFn({ productId: product._id, userToken });
  }

  function handleDeleteProduct() {
    deleteProductFromWishlistMutateFn({ productId: product._id, userToken });
  }
  return (
    <TableRow>
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <img className="h-[100px]" src={product.imageCover} alt="" />
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          {!product.priceAfterDiscount && (
            <span className="text-gray-500 text-medium">
              {product.price} EGP
            </span>
          )}

          {product.priceAfterDiscount && (
            <>
              <span className="text-gray-500 whitespace-nowrap line-through text-medium">
                {product.price} EGP
              </span>
              <span className="text-red-400 whitespace-nowrap font-bold text-lg">
                {product.priceAfterDiscount} EGP
              </span>
            </>
          )}
        </div>
      </TableCell>
      <TableCell>
        <span
          className={`text-base whitespace-nowrap  font-semibold ${
            product.quantity ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.quantity ? "IN STOCK" : "SOLD OUT"}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <button
            disabled={isAddingProduct}
            onClick={handleAddProduct}
            className="rounded-lg whitespace-nowrap transition-all duration-400 text-sm bg-purple-600 px-5 py-2.5 text-center  font-medium text-white hover:bg-purple-300 focus:outline-none "
          >
            Add to cart
          </button>
          <button
            disabled={isDeletingProduct}
            onClick={handleDeleteProduct}
            className="group transition duration-400 hover:bg-red-500 border-1 rounded-md border-red-500 text-red-500 px-3 py-2 "
          >
            <FaRegTrashCan
              size={20}
              className="group-hover:text-white transition duration-400"
            />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default WishlistRow;
