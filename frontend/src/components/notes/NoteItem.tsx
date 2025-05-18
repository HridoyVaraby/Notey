import React from 'react';
import { Note } from './types';

type NoteItemProps = {
  note: Note;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{note.title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => onEdit(note.id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(note.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{note.content}</p>
      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {note.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="text-sm text-gray-500 mt-2">
        Last updated: {new Date(note.updatedAt).toLocaleString()}
      </div>
    </div>
  );
};

export default NoteItem;