import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SIDEBARS_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366F1", path: "/" },
  { name: "Users", icon: Users, color: "#6366F1", path: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", path: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: "/orders" },
  { name: "Analytics", icon: BarChart2, color: "#6366F1", path: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", path: "/settings" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", path: "/products" },
];
export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <motion.div
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
        animate={{ width: isSidebarOpen ? "256" : "80" }}
      >
        <div className="h-full bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors
            max-w-fit"
          >
            <Menu size={24} />
          </motion.button>
          <nav className="mt-8 flex-grow">
            {SIDEBARS_ITEMS.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <item.icon size={24} color={item.color} />
                {isSidebarOpen && <span>{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};
