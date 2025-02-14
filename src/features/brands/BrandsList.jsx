import Spinner from "../../ui/Spinner";
import BrandItem from "./BrandItem";
import useBrands from "./useBrands";

function BrandsList() {
  const { brands, isLoading } = useBrands();

  if(isLoading) return <Spinner />
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {brands.map((brand) => (
        <BrandItem key={brand._id} brand={brand} />
      ))}
    </ul>
  );
}

export default BrandsList;
