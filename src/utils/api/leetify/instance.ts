import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const leetifyApi = fetches.create({
  baseURL: 'https://api-public.cs-prod.leetify.com/v3',
  headers: {
    _leetify_key: `${process.env.LEETIFY_API_KEY}`
  }
});

leetifyApi.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('Leetify service error');
  }

  return response;
});
