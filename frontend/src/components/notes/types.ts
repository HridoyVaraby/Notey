export interface Note {
  id: string;
  title: string;
  content: string;
  color?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}