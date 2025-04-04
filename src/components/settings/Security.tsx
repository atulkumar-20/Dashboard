import { SettingSection } from "./SettingsSection";
import { ToggleSwitch } from "./ToggleSwitch";
import { Lock } from "lucide-react";
import { useState } from "react";

export const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <>
      <SettingSection icon={Lock} title={"Security"}>
        <ToggleSwitch
          Label={"Two Factor Authentication"}
          isOn={twoFactor}
          onToggle={() => setTwoFactor(!twoFactor)}
        />
        <div className="mt-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </SettingSection>
    </>
  );
};
