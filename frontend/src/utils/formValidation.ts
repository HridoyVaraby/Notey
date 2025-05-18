/**
 * Form validation utility functions
 */

/**
 * Validates email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates password strength
 * @param password - Password to validate
 * @returns Object with validation result and message
 */
export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' };
  }
  
  // Check for at least one number
  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  // Check for at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character' };
  }
  
  return { isValid: true };
};

/**
 * Validates required fields in a form
 * @param formData - Object containing form data
 * @param requiredFields - Array of required field names
 * @returns Object with validation result and errors
 */
export const validateRequiredFields = (
  formData: Record<string, any>,
  requiredFields: string[]
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  requiredFields.forEach(field => {
    if (!formData[field] || (typeof formData[field] === 'string' && formData[field].trim() === '')) {
      errors[field] = 'This field is required';
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validates date format and ensures it's not in the past
 * @param dateString - Date string to validate
 * @param allowPast - Whether to allow past dates
 * @returns Object with validation result and message
 */
export const validateDate = (
  dateString: string,
  allowPast = false
): { isValid: boolean; message?: string } => {
  if (!dateString) {
    return { isValid: false, message: 'Date is required' };
  }
  
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (isNaN(date.getTime())) {
    return { isValid: false, message: 'Invalid date format' };
  }
  
  if (!allowPast && date < today) {
    return { isValid: false, message: 'Date cannot be in the past' };
  }
  
  return { isValid: true };
};

/**
 * Validates form input based on field type
 * @param field - Field name
 * @param value - Field value
 * @param type - Field type
 * @returns Object with validation result and message
 */
export const validateField = (
  field: string,
  value: any,
  type: 'text' | 'email' | 'password' | 'date'
): { isValid: boolean; message?: string } => {
  // Check if field is empty
  if (!value && type !== 'text') {
    return { isValid: false, message: 'This field is required' };
  }
  
  switch (type) {
    case 'email':
      return isValidEmail(value)
        ? { isValid: true }
        : { isValid: false, message: 'Please enter a valid email address' };
    
    case 'password':
      return validatePassword(value);
    
    case 'date':
      return validateDate(value);
    
    default:
      return { isValid: true };
  }
};