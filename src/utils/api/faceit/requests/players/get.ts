import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { faceitApi } from '../../instance';

interface GetFaceitProfileParams {
  nickname: string;
  game?: string;
  game_player_id?: string;
}

type GetFaceitProfileConfig = FetchesRequestConfig<GetFaceitProfileParams>;

export const getFaceitProfile = ({ params, config }: GetFaceitProfileConfig) =>
  faceitApi.get<GetFaceitProfileResponse>(`/players`, {
    ...config,
    query: { ...params }
  });
