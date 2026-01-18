import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { steamApi } from '../../../../instance';

interface GetSteamUserSummariesParams {
  steamids: string;
}

type GetSteamUserSummariesConfig = FetchesRequestConfig<GetSteamUserSummariesParams>;

export const getSteamUserSummaries = ({ params, config }: GetSteamUserSummariesConfig) =>
  steamApi.get<GetSteamUserSummariesResponse>('/ISteamUser/GetPlayerSummaries/v2', {
    ...config,
    query: { ...params }
  });
