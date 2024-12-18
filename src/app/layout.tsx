import QueryProvider from '@/components/QueryProvider';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Riot App',
  description: '이번주 무료 챔피언 리스트도 확인할 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <QueryProvider>
          <header className="bg-gray-800 text-white">
            <nav className="container mx-auto p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <Link href="/">My Riot App</Link>
              </h1>
              <ul className="flex gap-4">
                <li>
                  <Link
                    href="/champions"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500"
                  >
                    챔피언
                  </Link>
                </li>
                <li>
                  <Link
                    href="/items"
                    className="px-4 py-2 rounded bg-green-600 hover:bg-green-500"
                  >
                    아이템
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rotation"
                    className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-500"
                  >
                    무료 챔피언
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto p-4 flex-grow">{children}</main>
          <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
            <p>&copy; 2024 My Riot App</p>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
