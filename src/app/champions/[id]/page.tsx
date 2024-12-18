import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';
import { ChampionDetail } from '@/types/Champion'; 

interface ChampionDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ChampionDetailPageProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
  };
}

export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{champion.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-4">{champion.title}</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            {champion.blurb}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {champion.spells.map((spell) => (
            <li key={spell.id} className="p-4 border rounded-lg shadow-md">
              <h4 className="font-bold mb-2">{spell.name}</h4>
              <p className="text-sm text-gray-600">{spell.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
