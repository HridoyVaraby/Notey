import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">404</h2>
          <p className="mt-2 text-center text-6xl font-bold text-gray-600 dark:text-gray-400">Page Not Found</p>
          <p className="mt-4 text-center text-md text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-6">
          <Link 
            to="/" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;