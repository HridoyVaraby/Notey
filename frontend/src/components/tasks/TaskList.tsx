import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // This will be replaced with an actual API call
    // For now, we'll use mock data
    setIsLoading(true);
    setTimeout(() => {
      const mockTasks: Task[] = [
        {
          id: '1',
          title: 'Complete Notey frontend',
          description: 'Implement all required components for the Notey application',
          completed: false,
          dueDate: '2023-12-31',
          priority: 'high',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Set up backend',
          description: 'Create Node.js/Express backend with MySQL database',
          completed: false,
          priority: 'medium',
          createdAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Test application',
          description: 'Perform comprehensive testing of the application',
          completed: false,
          priority: 'low',
          createdAt: new Date().toISOString(),
        },
      ];
      setTasks(mockTasks);
      setIsLoading(false);
    }, 1000);
  }, []);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <div className="space-y-6">
      <TaskForm onAddTask={addTask} />
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No tasks yet. Add your first task above!
            </p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={toggleTaskCompletion}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;