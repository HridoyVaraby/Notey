/**
 * Tailwind CSS utility classes and component styles
 * 
 * This file provides reusable Tailwind CSS class combinations for consistent styling
 * throughout the application.
 */

// Button styles
export const buttonStyles = {
  primary: 'inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:border-blue-800 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150',
  secondary: 'inline-flex items-center px-4 py-2 bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150',
  danger: 'inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-800 focus:outline-none focus:border-red-800 focus:ring ring-red-300 disabled:opacity-25 transition ease-in-out duration-150',
  success: 'inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-800 focus:outline-none focus:border-green-800 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150',
  icon: 'p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
};

// Form input styles
export const inputStyles = {
  base: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
  error: 'block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm',
  disabled: 'block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm placeholder-gray-400 text-gray-500 sm:text-sm'
};

// Label styles
export const labelStyles = {
  base: 'block text-sm font-medium text-gray-700 mb-1',
  error: 'block text-sm font-medium text-red-600 mb-1'
};

// Card styles
export const cardStyles = {
  base: 'bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-shadow duration-300 hover:shadow-md',
  interactive: 'bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]',
  bordered: 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6'
};

// Priority badge styles
export const priorityBadgeStyles = {
  low: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  medium: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  high: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

// Status badge styles
export const statusBadgeStyles = {
  pending: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  'in-progress': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  completed: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
};

// Tag styles
export const tagStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';

// Layout styles
export const layoutStyles = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-6 sm:py-8',
  pageHeader: 'pb-5 border-b border-gray-200 dark:border-gray-700 mb-6 flex items-center justify-between'
};

// Animation classes
export const animationStyles = {
  fadeIn: 'animate-fadeIn',
  slideIn: 'animate-slideIn',
  pulse: 'animate-pulse'
};

// Responsive utilities
export const responsiveStyles = {
  hideOnMobile: 'hidden sm:block',
  hideOnDesktop: 'sm:hidden'
};

// Dark mode toggle styles
export const darkModeStyles = {
  toggle: 'p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
};

// Error message styles
export const errorMessageStyles = 'mt-1 text-sm text-red-600 dark:text-red-500';

// Success message styles
export const successMessageStyles = 'mt-1 text-sm text-green-600 dark:text-green-500';