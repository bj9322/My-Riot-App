'use client';

import { useQuery } from '@tanstack/react-query';
import { getChampionRotation } from '@/utils/riotApi';
import Image from 'next/image';

type Champion = {
  id: string;
  name: string;
  image: string;
};

export default function RotationPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['championRotation'],
    queryFn: async () => {
      const rotationData = await getChampionRotation();

      const versionsResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
      const versions = await versionsResponse.json();
      const latestVersion = versions[0];

      const championsResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
      );
      const championsData = await championsResponse.json();

      const rotatedChampions: Champion[] = rotationData.freeChampionIds.map((id: number) => {
        const championKey = Object.keys(championsData.data).find(
          (key) => Number(championsData.data[key].key) === id
        );

        if (championKey) {
          const champion = championsData.data[championKey];
          return {
            id: champion.id,
            name: champion.name,
            image: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
          };
        }

        return {
          id: id.toString(),
          name: `Unknown Champion ${id}`,
          image: '',
        };
      });

      return rotatedChampions.filter((champion) => champion.image !== '');
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">이번주 무료 챔피언</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data?.map((champion) => (
          <li key={champion.id} className="text-center">
            <Image
              src={champion.image}
              alt={champion.name}
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow-md"
            />
            <p className="font-semibold mt-2">{champion.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
