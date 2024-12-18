export async function getChampionRotation() {
    const response = await fetch('/api/rotation');
  
    if (!response.ok) {
      throw new Error('Failed to fetch champion rotation');
    }
  
    const data = await response.json();
    return data;
  }
  