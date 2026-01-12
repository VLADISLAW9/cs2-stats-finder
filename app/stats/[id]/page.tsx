import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { getLeetifyProfile } from '@/src/utils/api/leetify/requests';
import { Params } from 'next/dist/server/request/params';
import { StatsCard, StatsProgress } from './(components)';
import { Progress } from '@/src/components/ui/progress';

interface StatsPageParams extends Params {
  id: string;
}

interface StatsPageProps {
  params: Promise<StatsPageParams>;
}

export const StatsPage = async (props: StatsPageProps) => {
  const params = await props.params;

  const getLeetifyProfileResponse = await getLeetifyProfile({ params: { steam64_id: params.id } });

  console.log(getLeetifyProfileResponse.data.ranks);

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
            <p className='text-gray-500 font-bold'>Based on the last 30 Matches</p>
          </CardHeader>
          <div className='flex flex-col w-full px-6 gap-5'>
            <StatsProgress title='Aim' value={getLeetifyProfileResponse.data.rating.aim} />
            <StatsProgress
              title='Head Accuracy'
              value={getLeetifyProfileResponse.data.stats.accuracy_head}
            />
            <StatsProgress
              title='Spray Accuracy'
              value={getLeetifyProfileResponse.data.stats.spray_accuracy}
            />

            <StatsProgress
              title='Enemy Spotted Accuracy'
              value={getLeetifyProfileResponse.data.stats.accuracy_enemy_spotted}
            />
          </div>
          <CardContent>
            <div className='grid grid-flow-col grid-rows-1 gap-4'>
              <StatsCard
                title='Winrate'
                value={`${getLeetifyProfileResponse.data.winrate * 100}%`}
              />
              <StatsCard
                title='Reaction Time'
                value={`${Math.round(getLeetifyProfileResponse.data.stats.reaction_time_ms)}ms`}
              />
              <StatsCard
                title='Total Matches'
                value={getLeetifyProfileResponse.data.total_matches}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsPage;
