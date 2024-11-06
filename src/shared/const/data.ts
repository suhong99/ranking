export type Data = {
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

export const DATA_URL =
  'https://gateway.pinata.cloud/ipfs/bafkreia2tigtk5kv5x6mptrscob7rwyvooyzte2j7luimkfssvm3m2zf54';
