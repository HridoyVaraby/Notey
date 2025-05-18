import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/notes';

interface Note {
  id: string;
  title: string;
  content: string;
  color?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export const noteService = {
  async getNotes(): Promise<Note[]> {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  },

  async createNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
    const response = await axios.post(API_BASE_URL, note);
    return response.data;
  },

  async updateNote(id: string, updatedNote: Partial<Note>): Promise<Note> {
    const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedNote);
    return response.data;
  },

  async deleteNote(id: string): Promise<void> {
    await axios.delete(`${API_BASE_URL}/${id}`);
  }
};