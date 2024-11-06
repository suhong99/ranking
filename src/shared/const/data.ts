export type ServerData = {
  player: {
    id: number;
    name: string;
    guild?: {
      name: string;
    };
  };
  score: number;
  wins: number;
  losses: number;
};

export type ExposedData = ServerData & {
  winRate: number;
};

export type SortCriteria = 'score' | 'wins' | 'losses' | 'winRate';

export const DATA_URL =
  'https://gateway.pinata.cloud/ipfs/bafkreia2tigtk5kv5x6mptrscob7rwyvooyzte2j7luimkfssvm3m2zf54';
