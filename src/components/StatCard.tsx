import { motion } from "framer-motion";
import { StatCardProps } from "../types/charts";

export const StatCard = ({ name, value, icon: Icon, color }: StatCardProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <div className="flex items-center">
        <motion.div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={24} className="w-6 h-6" style={{ color }} />
        </motion.div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-400">{name}</p>
          <p className="text-2xl font-semibold text-gray-100">{value}</p>
        </div>
      </div>
    </div>
  );
};
