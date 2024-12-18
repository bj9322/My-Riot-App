import { Item } from '@/types/Item';

export async function getChampionList() {
  try {
    const versionsResponse = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    );

    if (!versionsResponse.ok) {
      throw new Error('Failed to fetch Data Dragon versions');
    }

    const versions = await versionsResponse.json();
    const latestVersion = versions[0];

    const championsResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
    );

    if (!championsResponse.ok) {
      throw new Error('Failed to fetch champion list');
    }

    const champions = await championsResponse.json();
    return champions.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || 'An error occurred while fetching items');
    }
    throw new Error('An unknown error occurred');
  }
}

  export async function getItemList() {
    try {
      const versionsResponse = await fetch(
        'https://ddragon.leagueoflegends.com/api/versions.json'
      );
  
      if (!versionsResponse.ok) {
        throw new Error('Failed to fetch Data Dragon versions');
      }
  
      const versions = await versionsResponse.json();
      const latestVersion = versions[0];
  
      const itemsResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
      );
  
      if (!itemsResponse.ok) {
        throw new Error('Failed to fetch item list');
      }
  
      const items = await itemsResponse.json();
      return items.data;
    } catch (error) {
  
      if (error instanceof Error) {
        throw new Error(error.message || 'An error occurred while fetching items');
      }
  
      throw new Error('An unknown error occurred');
    }
  }

  export async function fetchItemList(): Promise<{ data: Record<string, Item>; version: string }> {
    try {
      const versionsResponse = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  
      if (!versionsResponse.ok) {
        throw new Error("Failed to fetch Data Dragon versions");
      }
  
      const versions = await versionsResponse.json();
      const latestVersion = versions[0];
  
      const itemsResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
      );
  
      if (!itemsResponse.ok) {
        throw new Error("Failed to fetch item list");
      }
  
      const items = await itemsResponse.json();
      return { data: items.data || {}, version: latestVersion };
    } catch (error) {
      console.error("Error fetching item list:", error);
      return { data: {}, version: "" }; 
    }
  }


  export async function fetchChampionDetail(id: string) {
    const versionsResponse = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    );
  
    if (!versionsResponse.ok) {
      throw new Error('Failed to fetch Data Dragon versions');
    }
  
    const versions = await versionsResponse.json();
    const latestVersion = versions[0];
  
    const championResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`
    );
  
    if (!championResponse.ok) {
      throw new Error(`Failed to fetch champion detail for ${id}`);
    }
  
    const championData = await championResponse.json();
    return championData.data[id];
  }