import { Helmet } from "react-helmet";
import CheckoutForm from "../features/orders/CheckoutForm";

function Checkout() {
  return (
    <div className="my-20 mx-auto flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Checkout</title>
      </Helmet>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
