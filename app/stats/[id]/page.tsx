import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { getLeetifyProfile } from '@/src/utils/api/leetify/requests';
import { Params } from 'next/dist/server/request/params';
import { StatsBarChart, StatsCard } from './(components)';

interface StatsPageParams extends Params {
  id: string;
}

interface StatsPageProps {
  params: Promise<StatsPageParams>;
}

export const StatsPage = async (props: StatsPageProps) => {
  const params = await props.params;

  const getLeetifyProfileResponse = await getLeetifyProfile({ params: { steam64_id: params.id } });

  return (
    <div className='flex gap-8 h-full'>
      <Card className='w-[30%] gap-5 flex flex-col items-center p-5'>
        <Avatar className='w-30 h-30'>
          <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className='font-bold'>Steam Name</h1>
      </Card>
      <div className='w-[70%] flex flex-col gap-8'>
        <Card>
          <CardHeader>
            <h1 className='font-bold'>Leetify Statistics</h1>
          </CardHeader>
          <CardContent>
            <div className='grid grid-flow-col grid-rows-1 gap-4'>
              <StatsCard
                title='Winrate'
                value={`${getLeetifyProfileResponse.data.winrate * 100}%`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsPage;
