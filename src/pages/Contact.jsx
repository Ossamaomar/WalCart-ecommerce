import { BreadcrumbItem, Breadcrumbs, Button } from "@heroui/react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <div className="my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Contact</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Contact</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="max-w-5xl mx-auto  bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info Section */}

        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-md space-y-6">
          {/* Call Us */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-600  rounded-full">
              <FaPhoneAlt color="#fff" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
              <p className="text-gray-600 text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-semibold mt-2 text-sm">
                Phone: +8801611112222
              </p>
            </div>
          </div>
          <hr className="border-gray-300" />
          {/* Write To Us */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-600 text-white rounded-full">
              <FiMail color="#fff" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
              <p className="text-gray-600 text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mt-2 text-sm font-semibold">
                customer@exclusive.com
              </p>
              <p className="text-sm font-semibold">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-2 bg-gray-100 dark:bg-slate-800 p-6 rounded-md">
          <form className="space-y-4">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full bg-gray-100 dark:bg-slate-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full bg-gray-100 dark:bg-slate-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full bg-gray-100 dark:bg-slate-600 focus:outline-none"
              />
            </div>
            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 dark:border-gray-700 rounded-md p-3 w-full bg-gray-100 dark:bg-slate-600 focus:outline-none h-40"
            ></textarea>
            {/* Submit Button */}
            <Button className="bg-purple-600 text-white px-6 py-3 rounded-md w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
