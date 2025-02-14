/* eslint-disable react/prop-types */
import StyledHeading from "../../ui/StyledHeading";
import ProductCard from "./ProductCard";

function RelatedProducts({ relatedProducts }) {
  return (
    <div className="flex flex-col items-center">
      <StyledHeading headingText={"Related Products"} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default RelatedProducts;
