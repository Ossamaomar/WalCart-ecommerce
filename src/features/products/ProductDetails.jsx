import { useParams } from "react-router-dom";
import useProductDetails from "./useProductDetails";
import MoonLoader from "react-spinners/MoonLoader";
import StarRating from "../../ui/StarRating";
import { Button } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa6";
import DeliveryInfo from "../../ui/DeliveryInfo";
import useProducts from "./useProducts";
import RelatedProducts from "./RelatedProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../../ui/SimpleSlider";
import Spinner from "../../ui/Spinner";
import useAddProduct from "../cart/useAddProduct";
import { useUserContext } from "../../contexts/UserContext";
import toast from "react-hot-toast";
import useAddWishlistProduct from "../wishlist/useAddWishlistProduct";

function ProductDetails() {
  const { productID } = useParams();
  const { product: productDetails, isLoading: isLoadingProductDetails } =
    useProductDetails(productID);
  const { products: allProducts, isLoading: isLoadingAllProducts } =
    useProducts();
  const { userToken } = useUserContext();
  const { addProductMutatFn, isPending: isAddingtoCart } = useAddProduct();
  const {addProductToWishlistMutatFn, isPending:isAddingtoWishlist} = useAddWishlistProduct();

  if (isLoadingProductDetails || isLoadingAllProducts) return <Spinner />;

  const relatedProducts = allProducts
    .filter(
      (product) =>
        product.category.name === productDetails.category.name &&
        product._id !== productDetails._id
    )
    .slice(0, 4);

  const productImages = productDetails.images;


  function handleAddToCart() {
      if(!userToken) toast('Please login first!', {
        icon: '⚠️',
      });

      else addProductMutatFn({ productId: productDetails._id, userToken })
  }


  function handleAddToWishlist() {
    if(!userToken) toast('Please login first!', {
      icon: '⚠️',
    });

    else addProductToWishlistMutatFn({ productId: productDetails._id, userToken })
}

  return (
    <div className="flex flex-col mx-auto gap-12">
      <div className="flex flex-col md:flex-row justify-center items-center flex-nowrap gap-10 md:gap-5">
        <div className="w-[400px]">
          <div>
            <SimpleSlider productImages={productImages} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">{productDetails.title}</h2>

          <div className="flex gap-5 items-center">
            <div className="flex gap-5">
              <StarRating rating={productDetails.ratingsAverage} />
              <span className="text-gray-400 whitespace-nowrap text-medium">
                ({productDetails.ratingsQuantity} reviews)
              </span>
            </div>

            <div className="h-[23px] w-[2px] bg-gray-600 bg-opacity-40"></div>

            <span
              className={`text-base whitespace-nowrap  font-semibold ${
                productDetails.quantity ? "text-green-500" : "text-red-500"
              }`}
            >
              {productDetails.quantity ? "IN STOCK" : "SOLD OUT"}
            </span>
          </div>

          <h4 className="text-2xl font-semibold">{productDetails.price} EGP</h4>

          <p>{productDetails.description}</p>

          <div className="w-full h-[2px] bg-gray-600 bg-opacity-40"></div>

          <div className="flex items-center gap-3">
            <Button
              variant="shadow"
              onPress={handleAddToCart}
              className="text-md transition-all duration-300 bg-purple-600 text-white font-medium hover:scale-110"
            >
              Add to cart
            </Button>
            <Button
              variant="shadow"
              className="bg-transparent transition-all duration-300 hover:scale-110 border border-black hover"
              onPress={handleAddToWishlist}
            >
              <FaRegHeart
                className="transition-all duration-300 hover:text-purple-500"
                size={20}
              />
            </Button>
          </div>

          <DeliveryInfo />
        </div>
      </div>

      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
}

export default ProductDetails;
