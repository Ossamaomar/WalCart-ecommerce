import { FiRefreshCcw } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";

function DeliveryInfo() {
  return (
    <div className="border border-gray-600 border-opacity-70 rounded-md overflow-hidden ">
      <div className="flex items-start gap-4 p-4 border-b">
      <FaTruckFast size={30} />
        <div>
          <h3 className="font-semibold text-lg">Free Delivery</h3>
          <a href="#" className="text-sm text-black dark:text-white underline">
            Enter your postal code for Delivery Availability
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4">
      <FiRefreshCcw size={30} />
        <div>
          <h3 className="font-semibold text-lg">Return Delivery</h3>
          <p className="text-sm">
            Free 30 Days Delivery Returns.{' '}
            <a href="#" className="underline">Details</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
