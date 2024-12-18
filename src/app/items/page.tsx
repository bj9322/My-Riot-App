import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function ItemsPage() {
  const { data: itemList, version } = await fetchItemList();

  if (!itemList || Object.keys(itemList).length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">아이템 목록</h1>
        <p>아이템 데이터를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center font-bold mb-6">아이템 목록</h1>
      <div className="grid grid-cols-4 gap-6">
        {Object.entries(itemList).map(([id, item]) => (
          <div
            key={id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={64}
              height={64}
              className="mx-auto"
            />
            <h2 className="text-center mt-2 font-semibold text-sm">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
