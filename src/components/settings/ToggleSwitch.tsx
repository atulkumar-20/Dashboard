interface ToggleSwitchProps {
  Label: string;
  isOn: boolean;
  onToggle: () => void;
}

export const ToggleSwitch = ({ Label, isOn, onToggle }: ToggleSwitchProps) => {
  return (
    <>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-300">{Label}</span>
        <button
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
            isOn ? "bg-indigo-600" : "bg-gray-600"
          }`}
          onClick={onToggle}
        >
          <span
            className={`inline-block size-4 transform transition-transform bg-white rounded-full ${
              isOn ? "translate-x-6" : "translate-x-1"
            }`}
          ></span>
        </button>
      </div>
    </>
  );
};
