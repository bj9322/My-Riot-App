import Image from 'next/image';
import Link from 'next/link';
import { Champion, ChampionListResponse } from '@/types/Champion';

export const revalidate = 86400;

async function fetchChampionList(): Promise<Champion[]> {
  const versionsResponse = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json',
    { cache: 'force-cache' } 
  );

  if (!versionsResponse.ok) {
    throw new Error('Failed to fetch Data Dragon versions');
  }

  const versions = await versionsResponse.json();
  const latestVersion = versions[0];

  const championsResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
    { cache: 'force-cache' }
  );

  if (!championsResponse.ok) {
    throw new Error('Failed to fetch champion list');
  }

  const championsData: ChampionListResponse = await championsResponse.json();
  return Object.values(championsData.data);
}

export default async function ChampionsPage() {
  const champions = await fetchChampionList();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">챔피언 리스트</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
        {champions.map((champion) => (
          <li key={champion.id} className="border rounded-lg overflow-hidden">
            <Link href={`/champions/${champion.id}`}>
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  fill
                  objectFit="contain"
                  priority={false}
                />
              </div>
              <h2 className="text-lg font-semibold text-center p-2">
                {champion.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
