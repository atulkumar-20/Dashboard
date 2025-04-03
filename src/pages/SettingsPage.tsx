import { Header } from "../components/Header";
import { Notifications } from "../components/settings/Notifications";
import { Profile } from "../components/settings/Profile";
import { Security } from "../components/settings/Security";
import { ConnectedAccounts } from "../components/settings/ConnectedAccounts";
import { DangerZone } from "../components/settings/DangerZone";

export const Settings = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
        <Header title="settings" />
        <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
          <Profile />
          <Notifications />
          <Security />
          <ConnectedAccounts />
          <DangerZone />
        </main>
      </div>
    </>
  );
};
