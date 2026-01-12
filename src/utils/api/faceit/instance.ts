import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const faceitApi = fetches.create({
  baseURL: 'https://open.faceit.com/data/v4/',
  headers: {
    Authorization: `Bearer ${process.env.FACEIT_API_KEY}`
  }
});

faceitApi.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('Faceit service error');
  }

  return response;
});
