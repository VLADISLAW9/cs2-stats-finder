import { Progress } from '@/src/components/ui/progress';

interface StatsProgressProps {
  value: number;
  title: string;
}

export const StatsProgress = ({ title, value }: StatsProgressProps) => (
  <div>
    <div className='flex justify-between items-center mb-4'>
      <h1 className='font-bold '>{title}</h1>
      <p className='font-bold'>{Math.round(value)}%</p>
    </div>
    <Progress value={value} />
  </div>
);
