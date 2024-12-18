export type Champion = {
    id: string; 
    key: string; 
    name: string; 
    title: string; 
    blurb: string; 
    image: {
      full: string; 
      sprite: string; 
      group: string; 
      x: number; 
      y: number; 
      w: number; 
      h: number; 
    };
  }

  export type ChampionListResponse = {
    type: string;
    format: string;
    version: string;
    data: Record<string, Champion>; 
  }
  
  export type ChampionDetail = {
    id: string;
    title: string;
    name: string;
    blurb: string;
    spells: {
      id: string;
      name: string;
      description: string;
    }[];
  }
