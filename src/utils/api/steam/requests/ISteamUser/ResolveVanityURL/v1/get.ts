import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { steamApi } from '../../../../instance';

interface GetSteamUserResolveVanityURLParams {
  vanityurl: string;
  key: string;
}

type GetSteamUserResolveVanityURLConfig = FetchesRequestConfig<GetSteamUserResolveVanityURLParams>;

export const getSteamUserResolveVanityURL = ({
  params,
  config
}: GetSteamUserResolveVanityURLConfig) =>
  steamApi.get<GetSteamUserResolveVanityURLResponse>('/ISteamUser/ResolveVanityURL/v1', {
    ...config,
    query: { ...params }
  });
