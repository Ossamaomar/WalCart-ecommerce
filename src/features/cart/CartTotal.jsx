/* eslint-disable react/prop-types */
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

function CartTotal({totalCartPrice}) {
  return (
    <div className="border rounded-md p-4 w-80 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

      <div className="flex justify-between mb-2">
        <span>Total:</span>
        <span>{totalCartPrice} EGP</span>
      </div>

      <div className="flex justify-between mb-2 border-t pt-2">
        <span>Shipping:</span>
        <span>FREE</span>
      </div>

      <Button className="w-full bg-purple-600 text-white py-2 rounded-md">
        <Link to={'/checkout'}>Proceed to checkout</Link>
      </Button>
    </div>
  );
}

export default CartTotal;
