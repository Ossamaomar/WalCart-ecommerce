import {Tabs, Tab} from "@heroui/react";
import { useState } from "react";
import UpdateAccountPassword from "./UpdateAccountPassword";
import UpdateAccountInformation from "./UpdateAccountInformation";

function AccountSettings() {
  const [selectedTab, setSelectedTab] = useState("accountInfo");

  return (
    <div className="flex w-full flex-col items-center">
      <Tabs
        aria-label="Options"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        color="secondary"
      >
        <Tab key="accountInfo" title="Update Account Information">
          <UpdateAccountInformation />
        </Tab>
        <Tab key="updatePassword" title="Change Password">
          <UpdateAccountPassword />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AccountSettings;
