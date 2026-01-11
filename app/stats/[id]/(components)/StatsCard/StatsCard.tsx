import { Card } from '@/src/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
}

export const StatsCard = ({ title, value }: StatsCardProps) => (
  <Card className='flex flex-col items-center gap-1 p-5'>
    <h1 className='text-gray-500 font-bold text-lg'>{title}</h1>
    <p className='font-bold text-2xl'>{value}</p>
  </Card>
);
