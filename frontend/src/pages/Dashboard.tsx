import { useState } from 'react';

// Components for Dashboard will be imported here

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('tasks'); // 'tasks' or 'notes'

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Notey Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage your tasks and notes in one place</p>
      </header>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'tasks' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => setActiveTab('tasks')}
        >
          Tasks
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'notes' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => setActiveTab('notes')}
        >
          Notes
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {activeTab === 'tasks' ? (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Your Tasks</h2>
            <p className="text-gray-600 dark:text-gray-300">Task management functionality will be implemented here.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Your Notes</h2>
            <p className="text-gray-600 dark:text-gray-300">Note-taking functionality will be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;