import { parseToSteamId } from './(helpers)';
import { getSteamUserResolveVanityURL } from '@/src/utils/api/steam/requests';

interface GetSteam64IdParams {
  value: string;
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const getSteam64IdSearchParams = Object.fromEntries(
    searchParams.entries()
  ) as any as GetSteam64IdParams;

  if (!getSteam64IdSearchParams.value) {
    return Response.json({ error: 'Input is required' }, { status: 400 });
  }

  const parsedSteamId = parseToSteamId(getSteam64IdSearchParams.value);

  if (!parsedSteamId) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  if (parsedSteamId.type === 'steamid64') {
    return Response.json({ steamid64: parsedSteamId.value });
  }

  const getSteamUserResolveVanityURLResponse = await getSteamUserResolveVanityURL({
    params: { vanityurl: parsedSteamId.value, key: process.env.STEAM_API_KEY ?? '' }
  });

  return Response.json({ steam64Id: getSteamUserResolveVanityURLResponse.data.response.steamid });
};
