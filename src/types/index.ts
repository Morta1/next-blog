export interface MenuListItem {
  title: string;
  path: string;
  children?: MenuListItem[]
}

export interface Post {
  id: number;
  category: string;
  title: string;
  author: string;
  publishDate: string;
  tags: string[];
  content: string;
  thumbnail: string;
}

export interface Feature {
  title: string;
  content: string;
}