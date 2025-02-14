/* eslint-disable react/prop-types */
import { Chip } from "@heroui/react";

function OrderItem({ order }) {
  return (
    <div className="mb-20 relative after:absolute after:content-[''] after:block after:w-full after:h-[2px] after:border-t-[2px] after:border-purple-600 after:border-dashed  after:left-0 after:bottom-[-20px]">
      <div className="flex justify-between items-center bg-gray-200 bg-opacity-50 rounded-md py-6 px-3 dark:bg-slate-800">
        <h2 className="font-semibold text-xl">Order #{order?.id} Status</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Chip
            className={`${
              order?.isPaid ? "bg-success-600" : "bg-red-500"
            }  text-white`}
          >
            {order?.isPaid ? "PAID" : "NOT PAID"}
          </Chip>
          <Chip
            className={`${
              order?.isDelivered ? "bg-success-600" : "bg-warning-500"
            }  text-white`}
          >
            {order?.isDelivered ? "DELIVERED" : "DELIVIRING ORDER"}
          </Chip>
        </div>
      </div>

      <ul className="py-6 relative">
        {order?.cartItems?.map((item) => (
          <li key={item._id} className="flex justify-between font-semibold text-medium relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-200 after:bg-opacity-50 after:absolute after:left-0 after:bottom-[-10px] mb-5">
            <div className="max-w-[70%]">
              <span className="font-semibold">{item.count}x </span>
              <span className="font-normal">{item.product.title}</span>
            </div>
            <span>{item.price * item.count} EGP</span>
          </li>
        ))}
      </ul>

      <div className=" bg-gray-200 rounded-md bg-opacity-50 py-6 px-3 dark:bg-slate-800">
        <p className="font-light">Items Price: {order?.totalOrderPrice} EGP</p>
        <p className="font-light">Shipping Fees: FREE</p>
        <p className="font-light">Taxes: 0</p>
        <p className="font-semibold">Total Price : {order?.totalOrderPrice} EGP</p>
      </div>
    </div>
  );
}

export default OrderItem;
