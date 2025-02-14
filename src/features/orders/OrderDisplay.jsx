import Spinner from "../../ui/Spinner";
import useUserOrders from "./useUserOrders";
import OrderItem from "./OrderItem";
import EmptyOrders from "./EmptyOrders";

function OrderDisplay() {
  const { orders, isLoading: isLoadingOrders } = useUserOrders();

  if (isLoadingOrders) return <Spinner />;

  if(!orders.length) return <EmptyOrders />;
  // console.log(orders);
  return (
    <div className="relative">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderDisplay;
