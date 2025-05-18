# Technical Context: Notey

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: Promise-based HTTP client for API requests
- **React Router**: Library for routing in React applications
- **React Hook Form**: Library for form validation and handling

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MySQL**: Relational database management system
- **Sequelize**: ORM for Node.js and MySQL
- **JSON Web Token (JWT)**: For secure authentication
- **Bcrypt**: Library for password hashing

### Development Tools
- **Git**: Version control system
- **npm**: Package manager for JavaScript
- **ESLint**: Linting utility for JavaScript
- **Prettier**: Code formatter
- **Jest**: Testing framework

## Development Setup

### Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MySQL (v8.x or higher)

### Frontend Setup
```bash
# Clone repository (if applicable)
git clone <repository-url>

# Navigate to project directory
cd notey

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with the following variables:
# PORT=3001
# MYSQL_HOST=localhost
# MYSQL_PORT=3306
# MYSQL_USER=root
# MYSQL_PASSWORD=
# MYSQL_DATABASE=notey
# JWT_SECRET=your_jwt_secret

# Start development server
npm start
```

### Database Setup
```bash
# Create database
mysql -u root -p
CREATE DATABASE notey;
EXIT;

# Database migrations will be handled by Sequelize
```

## Technical Constraints

1. **Browser Compatibility**
   - Support for modern browsers (Chrome, Firefox, Safari, Edge)
   - No support required for Internet Explorer

2. **Performance Requirements**
   - Page load time under 2 seconds
   - API response time under 500ms

3. **Security Requirements**
   - HTTPS for production deployment
   - Secure password storage with bcrypt
   - JWT for authentication with appropriate expiration
   - Input validation and sanitization
   - Protection against common web vulnerabilities (XSS, CSRF, SQL Injection)

4. **Scalability Considerations**
   - Stateless backend for horizontal scaling
   - Database indexing for performance
   - Potential for future caching implementation

## Dependencies

### Frontend Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "react-hook-form": "^7.43.0",
    "tailwindcss": "^3.2.4"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "jest": "^29.4.1",
    "eslint": "^8.33.0",
    "prettier": "^2.8.3"
  }
}
```

### Backend Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.1.0",
    "sequelize": "^6.28.0",
    "jsonwebtoken": "^9.0.0",
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.4.1",
    "eslint": "^8.33.0",
    "prettier": "^2.8.3"
  }
}
```

## Tool Usage Patterns

1. **Version Control**
   - Feature branch workflow
   - Pull requests for code review
   - Semantic versioning for releases

2. **Testing Strategy**
   - Unit tests for components and functions
   - Integration tests for API endpoints
   - End-to-end tests for critical user flows

3. **Deployment Process**
   - Development environment: Local
   - Production environment: AWS or Vercel
   - CI/CD pipeline for automated testing and deployment

4. **Code Quality**
   - ESLint for code linting
   - Prettier for code formatting
   - Code reviews for all changes