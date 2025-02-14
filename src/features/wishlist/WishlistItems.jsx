import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import useWishlist from "./useWishlist";
import { useUserContext } from "../../contexts/UserContext";
import Spinner from "../../ui/Spinner";
import WishlistRow from "./WishlistRow";
import EmptyWishlist from "./EmptyWishlist";

function WishlistItems() {
  const { userToken } = useUserContext();
  const { wishlist, isLoading } = useWishlist(userToken);

  if (isLoading) return <Spinner />;
  if(!wishlist?.length) return <EmptyWishlist />
  return (
    <div className="overflow-x-auto w-full">
      <Table striped>
        <TableHead>
          <TableHeadCell>Product</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Stock Status</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableHead>

        <TableBody className="divide-y">
          {wishlist?.map((product) => (
            <WishlistRow key={product._id} product={product} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WishlistItems;
