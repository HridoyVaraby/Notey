import { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

interface Note {
  id: string;
  title: string;
  content: string;
  color?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // This will be replaced with an actual API call
    // For now, we'll use mock data
    setIsLoading(true);
    setTimeout(() => {
      const mockNotes: Note[] = [
        {
          id: '1',
          title: 'Project Requirements',
          content: 'Notey should include task management and note-taking features with a clean UI.',
          color: '#FEF3C7', // Amber-100
          tags: ['project', 'requirements'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Frontend Components',
          content: 'Need to create components for authentication, tasks, and notes.',
          color: '#DBEAFE', // Blue-100
          tags: ['frontend', 'react'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Backend Planning',
          content: 'Set up Node.js/Express backend with MySQL database and implement necessary API endpoints.',
          color: '#D1FAE5', // Green-100
          tags: ['backend', 'api'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      setNotes(mockNotes);
      setIsLoading(false);
    }, 1000);
  }, []);

  const addNote = (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: now,
      updatedAt: now,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) =>
        note.id === updatedNote.id
          ? { ...updatedNote, updatedAt: new Date().toISOString() }
          : note
      )
    );
  };

  return (
    <div className="space-y-6">
      <NoteForm onAddNote={addNote} />
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.length === 0 ? (
            <div className="col-span-full text-gray-500 dark:text-gray-400 text-center py-8">
              No notes yet. Add your first note above!
            </div>
          ) : (
            notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onUpdate={updateNote}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NoteList;