export interface IProduct {
    id?: string;
    vendor?: {
      name: string;
      link: string;
    };
    title: {
        name: string;
        link?: string
    }
    price: number;
    currency: string;
    image: {
        url: string;
        alt: string
    }
    variant?: {
      color: string;
      material: string;
    };
    quantity: number;
  }
  