import { HelpCircle } from "lucide-react";
import { SettingSection } from "./SettingsSection";
import { useState } from "react";

export const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      Connected: true,
      icon: "./google.png",
    },
    {
      id: 2,
      name: "Facebook",
      Connected: true,
      icon: "./facebook.svg",
    },
  ]);
  const toggleConnection = (id: number) => {
    setConnectedAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id
          ? { ...account, Connected: !account.Connected }
          : account
      )
    );
  };
  return (
    <>
      <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
        {connectedAccounts.map((account) => (
          <div key={account.id} className="flex items-center mb-4">
            <img
              src={account.icon}
              alt={account.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {account.name}
              </h3>
              <p className="text-gray-400">Connected</p>
            </div>
            <button
              className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              onClick={() => toggleConnection(account.id)}
            >
              {account.Connected ? "Connected" : "Connect"}
            </button>
          </div>
        ))}
      </SettingSection>
    </>
  );
};
