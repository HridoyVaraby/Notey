/**
 * Error handling utility for API requests
 */

interface ApiError {
  status?: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Format error message from API response
 * @param error - The error object from API response
 * @returns Formatted error message
 */
export const formatApiError = (error: any): string => {
  // Handle axios error structure
  if (error.response) {
    const { data, status } = error.response;
    
    // Handle validation errors
    if (status === 400 && data.errors) {
      return Object.entries(data.errors)
        .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
        .join('\n');
    }
    
    // Use server-provided message if available
    if (data.message) {
      return data.message;
    }
    
    // Fallback for other status codes
    return `Error ${status}: ${data.error || 'Something went wrong'}`;
  }
  
  // Network errors
  if (error.request) {
    return 'Network error. Please check your connection.';
  }
  
  // Fallback for other errors
  return error.message || 'An unexpected error occurred';
};

/**
 * Display error notification to user
 * @param error - The error object or message
 */
export const notifyError = (error: any): void => {
  const message = typeof error === 'string' ? error : formatApiError(error);
  // This can be replaced with your preferred notification library
  alert(message);
  console.error(message);
};

/**
 * Wrapper for API calls to handle errors consistently
 * @param apiCall - The API call function to execute
 * @returns Promise that resolves with the API response or rejects with a formatted error
 */
export const withErrorHandling = async <T>(apiCall: () => Promise<T>): Promise<T> => {
  try {
    return await apiCall();
  } catch (error) {
    notifyError(error);
    throw error;
  }
};