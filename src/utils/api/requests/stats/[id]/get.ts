import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../../instance';

interface GetStatsByIdParams {
  id: string;
}

type GetStatsByIdConfig = FetchesRequestConfig<GetStatsByIdParams>;

export const getStatsById = ({ params, config }: GetStatsByIdConfig) =>
  api.get<GetStatsByIdResponse>(`/stats/${params.id}`, { ...config });
