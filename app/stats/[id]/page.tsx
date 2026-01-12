import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { getLeetifyProfile } from '@/src/utils/api/leetify/requests';
import { Params } from 'next/dist/server/request/params';
import { StatsCard, StatsProgress } from './(components)';
import { getFaceitProfile } from '@/src/utils/api/faceit/requests';
import { cn } from '@/src/lib/utils';
import { getColorByFaceitLevel } from './(helpers)';
import { CheckCircle, CircleCheck, CircleX } from 'lucide-react';

interface StatsPageParams extends Params {
  id: string;
}

interface StatsPageProps {
  params: Promise<StatsPageParams>;
}

export const StatsPage = async (props: StatsPageProps) => {
  const params = await props.params;

  const getLeetifyProfileResponse = await getLeetifyProfile({ params: { steam64_id: params.id } });

  const getFaceitProfileResponse = await getFaceitProfile({
    params: { nickname: getLeetifyProfileResponse.data.name }
  });

  console.log(getFaceitProfileResponse.data);

  return (
    <div className='flex items-start gap-8'>
      <Card className='w-[30%] gap-5 flex flex-col items-center p-5'>
        <Avatar className='w-30 h-30'>
          <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className='font-bold'>{getFaceitProfileResponse.data.steam_nickname}</h1>
      </Card>
      <div className='w-[70%] flex flex-col gap-8'>
        <Card>
          <CardHeader>
            <h1 className='font-bold'>FACEIT CS2 Statistics</h1>
            <p className='text-gray-500 font-bold'>Based on the last 30 Matches</p>
          </CardHeader>
          <CardContent>
            <div className='flex justify-between'>
              <div className='flex items-center gap-5'>
                <h1
                  className={cn(
                    'text-2xl font-bold',
                    getColorByFaceitLevel(getFaceitProfileResponse.data.games.cs2.skill_level)
                  )}
                >
                  {getFaceitProfileResponse.data.games.cs2.skill_level}
                </h1>
                <p className='text-2xl font-bold'>
                  {getFaceitProfileResponse.data.games.cs2.faceit_elo}
                  <span className='ml-1 text-sm text-zinc-500'>ELO</span>
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <h1 className='text-base font-bold'>{getFaceitProfileResponse.data.nickname}</h1>
                {getFaceitProfileResponse.data.verified && (
                  <CircleCheck className=' h-5 text-yellow-500' />
                )}
                {!getFaceitProfileResponse.data.verified && (
                  <CircleX className='h-5 text-red-500' />
                )}
                <p>{getFaceitProfileResponse.data.country.toLocaleUpperCase()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='font-bold'>Leetify Statistics</h1>
            <p className='text-gray-500 font-bold'>Based on the last 30 Matches</p>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col w-full gap-5 mb-8'>
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
            <div className='grid grid-flow-col grid-rows-1 gap-4'>
              <StatsCard
                title='Winrate'
                value={`${Math.round(getLeetifyProfileResponse.data.winrate * 100)}%`}
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
