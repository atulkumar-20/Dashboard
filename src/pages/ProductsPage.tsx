import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { SalesTrendChart } from "../components/products/SalesTrendChart"; 
import { CategoryDistributionChart } from "../components/OverviewCharts/CategoryDistributionChart";
import { StatCard } from "../components/StatCard";
import { ProductsTable } from "../components/products/ProductsTable";
export const ProductsPage = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Header title="Products" />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatCard
              name="Total Products"
              icon={Zap}
              value="$12,345"
              color="#6366F1"
            />
            <StatCard
              name="Top Selling"
              icon={Users}
              value="1,234"
              color="#8B5CF6"
            />
            <StatCard
              name="Low Stock"
              icon={ShoppingBag}
              value="567"
              color="#EC4899"
            />
            <StatCard
              name="Total Revenue"
              icon={BarChart2}
              value="12.5%"
              color="#10B981"
            />
          </motion.div>
          <ProductsTable />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesTrendChart />
            <CategoryDistributionChart />
          </div>
        </main>
      </div>
    </>
  );
};
