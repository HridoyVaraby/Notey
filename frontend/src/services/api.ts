import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth services
export const authService = {
  register: (userData: { username: string; email: string; password: string }) =>
    api.post('/auth/register', userData),
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
};

// Note services
export const noteService = {
  getAllNotes: () => api.get('/notes'),
  getNoteById: (id: string) => api.get(`/notes/${id}`),
  createNote: (noteData: { title: string; content: string; color?: string; tags?: string[] }) =>
    api.post('/notes', noteData),
  updateNote: (id: string, noteData: { title?: string; content?: string; color?: string; tags?: string[] }) =>
    api.put(`/notes/${id}`, noteData),
  deleteNote: (id: string) => api.delete(`/notes/${id}`),
};

// Task services
export const taskService = {
  getAllTasks: () => api.get('/tasks'),
  getTaskById: (id: string) => api.get(`/tasks/${id}`),
  createTask: (taskData: {
    title: string;
    description?: string;
    dueDate?: string;
    priority?: 'low' | 'medium' | 'high';
    status?: 'pending' | 'in-progress' | 'completed';
    tags?: string[];
  }) => api.post('/tasks', taskData),
  updateTask: (id: string, taskData: {
    title?: string;
    description?: string;
    dueDate?: string;
    priority?: 'low' | 'medium' | 'high';
    status?: 'pending' | 'in-progress' | 'completed';
    tags?: string[];
  }) => api.put(`/tasks/${id}`, taskData),
  deleteTask: (id: string) => api.delete(`/tasks/${id}`),
  updateTaskStatus: (id: string, status: 'pending' | 'in-progress' | 'completed') =>
    api.patch(`/tasks/${id}/status`, { status }),
};

export default api;