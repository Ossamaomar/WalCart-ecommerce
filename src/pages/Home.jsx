import CategoriesSlider from "../features/categories/CategoriesSlider";
import ProductsList from "../features/products/ProductsList";
import MainSlider from "../ui/MainSlider";

function Home() {
  return (
    <div className="container my-20 mx-auto flex justify-center flex-col gap-20">
      
      <MainSlider />
      <CategoriesSlider />
      <ProductsList />
    </div>
  );
}

export default Home;
