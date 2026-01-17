import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instance';

interface GetSteam64IdParams {
  value: string;
}

type GetSteam64IdConfig = FetchesRequestConfig<GetSteam64IdParams>;

export const getSteam64Id = ({ params, config }: GetSteam64IdConfig) =>
  api.get<GetSteam64IdResponse>('/steam-64-id', { ...config, query: { ...params } });
