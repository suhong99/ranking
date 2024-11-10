import { useEffect, useState } from 'react';
import { DATA_URL, ExposedData, ServerData } from '../../../shared/const/data';

export const useFetchData = () => {
  const [data, setData] = useState<ExposedData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        data.map((e: ServerData) => {
          const winRate =
            e.wins + e.losses === 0 ? 0 : e.wins / (e.wins + e.losses);
          return {
            ...e,
            winRate,
          };
        });

        setData(
          data.map((e: ServerData) => {
            const winRate =
              e.wins + e.losses === 0 ? 0 : e.wins / (e.wins + e.losses);
            return {
              ...e,
              winRate,
            };
          })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading] as const;
};
