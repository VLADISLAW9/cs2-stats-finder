import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const steamApi = fetches.create({
  baseURL: 'https://api.steampowered.com'
});

steamApi.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('Steam service error');
  }

  return response;
});
