import { SettingSection } from "./SettingsSection";
import { Bell } from "lucide-react";
import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export const Notifications = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });
  return (
    <>
      <SettingSection icon={Bell} title={"Notifications"}>
        <div className="mb-6">
          <ToggleSwitch
            Label={"Email"}
            isOn={notifications.email}
            onToggle={() =>
              setNotifications({
                ...notifications,
                email: !notifications.email,
              })
            }
          />
          <ToggleSwitch
            Label={"Push"}
            isOn={notifications.push}
            onToggle={() =>
              setNotifications({ ...notifications, push: !notifications.push })
            }
          />
          <ToggleSwitch
            Label={"SMS"}
            isOn={notifications.sms}
            onToggle={() =>
              setNotifications({ ...notifications, sms: !notifications.sms })
            }
          />
        </div>
      </SettingSection>
    </>
  );
};
