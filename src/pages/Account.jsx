import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import AccountSettings from "../features/authentication/AccountSettings";
import { Helmet } from "react-helmet";


function Account() {
  
  return (
    <div className="my-20 mx-auto flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WalCart | Account</title>
      </Helmet>
      <div className="flex justify-center mb-10">
        <Breadcrumbs size={"lg"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Account Settings</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <AccountSettings />
    </div>
  );
}

export default Account;
