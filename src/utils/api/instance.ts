import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const api = fetches.create({
  baseURL: 'http://localhost:3000/api'
});

api.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('CS2 FIND STATS service error');
  }

  return response;
});
