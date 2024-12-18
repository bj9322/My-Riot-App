export type Item = {
    id: string; 
    name: string; 
    description: string; 
    gold: {
      base: number; 
    };
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

  export type ItemListResponse = {
    type: string;
    version: string;
    data: Record<string, Item>; 
  }
