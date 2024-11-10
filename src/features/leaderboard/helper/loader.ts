import { DATA_URL, ExposedData, ServerData } from '../../../shared/const/data';

export const getRankingData = async (): Promise<ExposedData[]> => {
  const response = await fetch(DATA_URL);
  const data: ServerData[] = await response.json();

  if (!response.ok) {
    throw new Error('랭킹 정보 획득 오류');
  }

  return data.map((e) => {
    const winRate = e.wins + e.losses === 0 ? 0 : e.wins / (e.wins + e.losses);
    return {
      ...e,
      winRate,
    };
  });
};
