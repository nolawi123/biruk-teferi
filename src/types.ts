export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  woodType: string;
  imageUrl: string;
}

export interface WoodType {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  features: string[];
}
