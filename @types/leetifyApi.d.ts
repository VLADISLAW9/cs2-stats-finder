interface Ban {
  platform: string;
  platform_nickname: string;
  banned_since: Date;
}

interface CompetitiveRank {
  map_name: string;
  rank: number;
}

interface Ranks {
  leetify: number;
  premier: number;
  faceit: number;
  faceit_elo: number;
  wingman: number;
  renown: number;
  competitive: CompetitiveRank[];
}

interface Rating {
  aim: number;
  positioning: number;
  utility: number;
  clutch: number;
  opening: number;
  ct_leetify: number;
  t_leetify: number;
}

interface Stats {
  accuracy_enemy_spotted: number;
  accuracy_head: number;
  counter_strafing_good_shots_ratio: number;
  ct_opening_aggression_success_rate: number;
  ct_opening_duel_success_percentage: number;
  flashbang_hit_foe_avg_duration: number;
  flashbang_hit_foe_per_flashbang: number;
  flashbang_hit_friend_per_flashbang: number;
  flashbang_leading_to_kill: number;
  flashbang_thrown: number;
  he_foes_damage_avg: number;
  he_friends_damage_avg: number;
  preaim: number;
  reaction_time_ms: number;
  spray_accuracy: number;
  t_opening_aggression_success_rate: number;
  t_opening_duel_success_percentage: number;
  traded_deaths_success_percentage: number;
  trade_kill_opportunities_per_round: number;
  trade_kills_success_percentage: number;
  utility_on_death_avg: number;
}

interface RecentMatch {
  id: string;
  finished_at: Date;
  data_source: string;
  outcome: string;
  rank: number;
  rank_type: null;
  map_name: string;
  leetify_rating: number;
  score: number[];
  preaim: number;
  reaction_time_ms: number;
  accuracy_enemy_spotted: number;
  accuracy_head: number;
  spray_accuracy: number;
}

interface RecentTeammate {
  steam64_id: string;
  recent_matches_count: number;
}

interface LeetifyProfile {
  privacy_mode: string;
  winrate: number;
  total_matches: number;
  first_match_date: Date;
  name: string;
  bans: Ban[];
  steam64_id: string;
  id: string;
  ranks: Ranks;
  rating: Rating;
  stats: Stats;
  recent_matches: RecentMatch[];
  recent_teammates: RecentTeammate[];
}

type LeetifyProfileResponse = LeetifyProfile;
