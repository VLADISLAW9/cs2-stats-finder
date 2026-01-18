interface BaseResponse<RESPONSE> {
  response: RESPONSE & {
    success: number;
  };
}
type GetSteamUserResolveVanityURLResponse = BaseResponse<{
  steamid: string;
}>;

type GetSteamUserSummariesResponse = BaseResponse<{}>;
