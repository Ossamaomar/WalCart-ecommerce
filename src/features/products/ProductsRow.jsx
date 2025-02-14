import { Link } from "react-router-dom";
import StyledHeading from "../../ui/StyledHeading";
import ProductCard from "./ProductCard";
import { FaArrowRight } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function ProductsRow({ products }) {
  return (
    <div>
      <div className="flex justify-between space-x-4">
        <StyledHeading headingText={products[0].category.name} />
        <Link className="text-purple-600" to={`/category/${products[0].category._id}`}>Browse all products from {products[0].category.name} category <FaArrowRight className="inline" />
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto w-fit">
        {products
          .map((product) => <ProductCard key={product._id} product={product} />)
          .slice(0, 4)}
      </ul>
    </div>
  );
}

export default ProductsRow;
