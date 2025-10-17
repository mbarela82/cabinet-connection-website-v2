// src/types/portfolio.ts

export interface PortfolioItem {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: {
    current: string;
  };
  imageUrl: string;
}
