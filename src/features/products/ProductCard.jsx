/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAddProduct from "../cart/useAddProduct";
import { useUserContext } from "../../contexts/UserContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import useAddWishlistProduct from "../wishlist/useAddWishlistProduct";
import Spinner from "../../ui/Spinner";
import useWishlist from "../wishlist/useWishlist";
import useDeleteWishlistProduct from "../wishlist/useDeleteWishlistProduct";
import StarRating from "../../ui/StarRating";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { userToken } = useUserContext();
  const navigate = useNavigate();
  const { addProductMutatFn, isPending } = useAddProduct();
  const { addProductToWishlistMutatFn } = useAddWishlistProduct();
  const { wishlist, isLoading: isLoadingWishlist } = useWishlist(userToken);
  const { deleteProductFromWishlistMutateFn, isPending: isDeletingProduct } =
    useDeleteWishlistProduct();

  function handleAddProduct(e) {
    e.stopPropagation();
    if (!userToken)
      toast("Please login first!", {
        icon: "⚠️",
      });
    else addProductMutatFn({ productId: product._id, userToken });
  }

  if (isLoadingWishlist) return <Spinner />;
  const isProductInWishlist = wishlist?.some(
    (item) => item._id === product._id
  );

  function handleAddWishlist(e) {
    e.stopPropagation();
    if (!userToken)
      toast("Please login first!", {
        icon: "⚠️",
      });
    else {
      if (isProductInWishlist)
        deleteProductFromWishlistMutateFn({
          productId: product._id,
          userToken,
        });
      else addProductToWishlistMutatFn({ productId: product._id, userToken });
    }
  }

  return (
    <Card
      className="max-w-sm transition-all hover:scale-[1.05] cursor-pointer  duration-400"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.imageCover}
      onClick={() => navigate(`/productDetails/${product._id}`)}
    >
      <div className="flex justify-between">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
      </div>
      <div className="mb-5 mt-2.5 flex items-center justify-between">
        <div>
          <span>{product.category.name}</span>
        </div>
        <div className="flex items-center">
          <StarRating rating={product.ratingsAverage} />
          <span className="ml-3 mr-2 rounded bg-purple-200 px-2.5 py-0.5 text-xs font-semibold text-purple-800">
            {product.ratingsAverage}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold  text-gray-900 dark:text-white">
          {product.price} EGP
        </span>
        <div className="flex justify-between items-center gap-2">
          <a
            onClick={handleAddProduct}
            className="rounded-lg whitespace-nowrap transition-all cursor-pointer duration-400 bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-300 focus:outline-none  dark:bg-purple-600"
          >
            Add to cart
          </a>

          <a
            onClick={handleAddWishlist}
            className="rounded-lg transition-all cursor-pointer duration-400  bg-white border-1 border-black  px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-300 focus:outline-none "
          >
            {isProductInWishlist ? (
              <FaHeart size={18} className="text-purple-600" />
            ) : (
              <FaRegHeart size={18} className="text-black" />
            )}
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
