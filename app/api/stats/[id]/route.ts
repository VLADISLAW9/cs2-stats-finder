import { parseToSteamId } from './(helpers)';

import { getLeetifyProfile } from '@/src/utils/api/leetify/requests';
import {
  getSteamUserResolveVanityURL,
  getSteamUserSummaries
} from '@/src/utils/api/steam/requests';
import { getFaceitProfile } from '@/src/utils/api/faceit/requests';

interface GetStatsByIdParams {
  params: Promise<{ id: string }>;
}

export const GET = async (_: Request, { params }: GetStatsByIdParams) => {
  const id = (await params).id;
  const parsedSteamId = parseToSteamId(id);

  if (!parsedSteamId) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  let steam64Id: string;

  if (parsedSteamId.type === 'steamid64') {
    steam64Id = parsedSteamId.value;
  } else {
    const getSteamUserResolveVanityURLResponse = await getSteamUserResolveVanityURL({
      // @ts-ignore
      params: { vanityurl: parsedSteamId.value, key: `${process.env.STEAM_API_KEY}` }
    });

    if (getSteamUserResolveVanityURLResponse.data.response.success !== 1) {
      return Response.json({ error: 'Steam user not found' }, { status: 404 });
    }

    steam64Id = getSteamUserResolveVanityURLResponse.data.response.steamid;
  }

  const [getLeetifyProfileResponse, getFaceitProfileResponse, getSteamUserSummariesResponse] =
    await Promise.all([
      getLeetifyProfile({ params: { steam64_id: steam64Id } }),
      getFaceitProfile({ params: { game_player_id: steam64Id, game: 'cs2' } }),
      getSteamUserSummaries({
        // @ts-ignore
        params: { steamids: steam64Id, key: `${process.env.STEAM_API_KEY}` }
      })
    ]);

  return Response.json({
    steam: getSteamUserSummariesResponse.data,
    leetify: getLeetifyProfileResponse.data,
    faceit: getFaceitProfileResponse.data
  });
};
