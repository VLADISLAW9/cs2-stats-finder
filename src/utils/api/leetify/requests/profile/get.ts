import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { leetifyApi } from '../../instance';

interface GetLeetifyProfileParams {
  steam64_id: string;
  id?: string;
}

type GetLeetifyProfileConfig = FetchesRequestConfig<GetLeetifyProfileParams>;

export const getLeetifyProfile = ({ params, config }: GetLeetifyProfileConfig) =>
  leetifyApi.get<GetLeetifyProfileResponse>('/profile', { ...config, query: { ...params } });
