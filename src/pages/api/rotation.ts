import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;

  if (!RIOT_API_KEY) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const rotationResponse = await fetch(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
      {
        headers: {
          'X-Riot-Token': RIOT_API_KEY,
        },
      }
    );

    if (!rotationResponse.ok) {
      throw new Error(`Failed to fetch champion rotations: ${rotationResponse.status}`);
    }

    const rotationData = await rotationResponse.json();
    res.status(200).json(rotationData);
  } catch (error) {
    console.error('Error fetching champion rotations:', error);
    res.status(500).json({ error: 'Failed to fetch champion rotations' });
  }
}
