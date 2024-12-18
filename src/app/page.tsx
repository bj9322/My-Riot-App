import Link from 'next/link';

export const metadata = {
  title: 'Home - My Riot App',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">League of Legends 챔피언 및 아이템 소개 페이지</h1>
        <p className="text-lg mb-6">
          이번주 무료 챔피언 리스트도 확인할 수 있습니다.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/champions"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            챔피언
          </Link>
          <Link
            href="/items"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            아이템
          </Link>
          <Link
            href="/rotation"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
          >
            무료 챔피언
          </Link>
        </div>
      </div>
      <footer className="mt-12 py-4 text-gray-500">
        © 2024 My Riot App. All rights reserved.
      </footer>
    </div>
  );
}
