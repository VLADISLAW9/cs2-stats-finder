const isSteamId64 = (value: string) => /^7656119\d{10}$/.test(value);

export type ParseToSteamIdReturn = {
  type: 'steamid64' | 'vanity';
  value: string;
} | null;

export const parseToSteamId = (input: string): ParseToSteamIdReturn => {
  if (isSteamId64(input)) return { type: 'steamid64', value: input };

  try {
    const url = new URL(input);

    if (url.pathname.startsWith('/profiles/')) {
      const id = url.pathname.split('/')[2];

      if (isSteamId64(id)) return { type: 'steamid64', value: id };
    }

    if (url.pathname.startsWith('/id/')) {
      return { type: 'vanity', value: url.pathname.split('/')[2] };
    }
  } catch {
    return { type: 'vanity', value: input };
  }

  return null;
};
