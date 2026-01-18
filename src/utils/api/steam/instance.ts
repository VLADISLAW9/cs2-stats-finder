import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const steamApi = fetches.create({
  baseURL: 'https://api.steampowered.com'
});

// TODO: add key to query to all requedst
// steamApi.interceptors.request.use((request) => {
//   request.query = {
//     ...request.query,
//     key: `${process.env.STEAM_API_KEY}`
//   };

//   return request;
// });

steamApi.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('Steam service error');
  }

  return response;
});
