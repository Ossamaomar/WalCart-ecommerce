import useCart from "./useCart";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";

import CartRow from "./CartRow";
import CartTotal from "./CartTotal";
import CartOptions from "./CartOptions";
import Spinner from "../../ui/Spinner";
import EmptyCart from "./EmptyCart";
import { useUserContext } from "../../contexts/UserContext";

function CartList() {
  const {userToken} = useUserContext();
  const { cart, isLoading } = useCart(userToken);
  if (isLoading) return <Spinner />;
  if(!cart?.products?.length) return <EmptyCart />
  return (
    <>
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead>
            <TableHeadCell>Product</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableHead>

          <TableBody className="divide-y">
            {cart.products.map((product) => (
              <CartRow key={product._id} cartItem={product} />
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:items-start my-5">
        <CartOptions />
        <CartTotal totalCartPrice={cart.totalCartPrice} />
      </div>
    </>
  );
}

export default CartList;
