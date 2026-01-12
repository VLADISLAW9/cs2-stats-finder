type GameType = 'cs2' | 'csgo';

interface Game {
  faceit_elo: number;
  game_player_id: string;
  game_player_name: string;
  game_profile_id: string;
  region: string;
  regions: null;
  skill_level: number;
  skill_level_label: string;
}

interface FacetProfile {
  activated_at: Date;
  avatar: string;
  country: string;
  cover_featured_image: string;
  cover_image: string;
  faceit_url: string;
  friends_ids: string[];
  games: Record<GameType, Game>;
  infractions: null;
  membership_type: string;
  memberships: string[];
  new_steam_id: string;
  nickname: string;
  platforms: Record<string, string>;
  player_id: string;
  settings: {
    language: string;
  };
  steam_id_64: string;
  steam_nickname: string;
  verified: true;
}

type GetFaceitProfileResponse = FacetProfile;
