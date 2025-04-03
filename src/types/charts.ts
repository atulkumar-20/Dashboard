export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface SalesDataPoint {
  name: string;
  sales: number;
}

export interface StatCardProps {
  name: string;
  value: number | string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
}
