# Notey - Task Manager & Note-Taking App

Notey is a full-stack web application for managing tasks and notes with a clean, intuitive interface. Built with React, Node.js, Express, and MySQL.

## Features

- **User Authentication**: Secure login and registration with JWT token-based authentication
- **Task Management**: Create, update, delete, and track tasks with priorities and due dates
  - Task prioritization (high, medium, low)
  - Due date tracking with reminders
  - Task filtering and sorting options
  - Task completion tracking
- **Note Taking**: Create, edit, and organize notes with tags
  - Rich text editor for note content
  - Tag-based organization system
  - Search functionality for finding notes quickly
  - Markdown support for formatting
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Data Persistence**: All data stored securely in MySQL database
- **Offline Capability**: Basic functionality available offline with data sync when online

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- MySQL database
- Sequelize ORM
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MySQL (v8.x or higher)

### Installation

1. Clone the repository

2. Set up the backend

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file with your MySQL credentials
# Example:
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=notey
JWT_SECRET=your_jwt_secret

# Start the backend server
npm run dev
```

3. Set up the frontend

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

### Database Setup

1. Create a MySQL database named `notey`

2. The application will automatically create the necessary tables when started

3. To seed the database with test data:

```bash
# In the backend directory
npm run seed
```

This will create test users, tasks, and notes for development and testing purposes.

## Usage

### Authentication

1. Register a new account or use one of the test accounts:
   - Username: testuser1, Password: password123
   - Username: testuser2, Password: password123

2. Log in with your credentials to access the dashboard

### Task Management

1. View all tasks on the Tasks tab of the dashboard
2. Create a new task by clicking the "Add Task" button
3. Fill in the task details:
   - Title (required)
   - Description (optional)
   - Due date (optional)
   - Priority (high, medium, low)
4. Edit a task by clicking the edit icon on a task card
5. Mark tasks as complete by clicking the checkbox
6. Delete tasks by clicking the delete icon
7. Filter tasks by status (all, active, completed)
8. Sort tasks by due date, priority, or creation date

### Note Management

1. View all notes on the Notes tab of the dashboard
2. Create a new note by clicking the "Add Note" button
3. Fill in the note details:
   - Title (required)
   - Content (required)
   - Tags (optional, comma-separated)
4. Edit a note by clicking the edit icon on a note card
5. Delete notes by clicking the delete icon
6. Filter notes by tags
7. Search notes by title or content

### User Settings

1. Access user settings by clicking on your profile icon
2. Update your profile information
3. Change your password
4. Manage notification preferences

## Development

### Project Structure

```
├── backend/               # Node.js/Express backend
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware
│   ├── models/            # Sequelize models
│   ├── routes/            # API routes
│   ├── seeders/           # Database seed scripts
│   └── server.js          # Entry point
│
├── frontend/              # React frontend
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── services/      # API services
│       └── main.tsx       # Entry point
│
└── memory-bank/           # Project documentation
```

## API Documentation

The Notey API follows RESTful principles and uses JWT for authentication.

### Authentication Endpoints

```
POST /api/auth/register - Register a new user
POST /api/auth/login - Login and receive JWT token
GET /api/auth/me - Get current user information
POST /api/auth/logout - Logout user
```

### Task Endpoints

```
GET /api/tasks - Get all tasks for current user
GET /api/tasks/:id - Get a specific task
POST /api/tasks - Create a new task
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task
PATCH /api/tasks/:id/complete - Toggle task completion status
```

### Note Endpoints

```
GET /api/notes - Get all notes for current user
GET /api/notes/:id - Get a specific note
POST /api/notes - Create a new note
PUT /api/notes/:id - Update a note
DELETE /api/notes/:id - Delete a note
GET /api/notes/tags/:tag - Get notes by tag
```

### Response Format

All API responses follow a standard format:

```json
{
  "success": true,
  "data": {}, // Response data
  "message": "Operation successful"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message",
  "code": 400 // HTTP status code
}
```

## Testing

### Unit Testing

The project uses Jest for unit testing components and utilities.

```bash
# Run unit tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

### Integration Testing

API endpoints are tested using Supertest with Jest.

```bash
# Run integration tests
npm run test:integration
```

### End-to-End Testing

E2E testing is implemented with Cypress.

```bash
# Open Cypress test runner
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

## Deployment

### Production Build

```bash
# Build the frontend
cd frontend
npm run build

# Build the backend (if using TypeScript)
cd ../backend
npm run build
```

### Deployment Options

#### Option 1: Traditional Hosting

1. Deploy the backend to a Node.js hosting service (Heroku, DigitalOcean, AWS, etc.)
2. Deploy the frontend build to a static hosting service (Netlify, Vercel, etc.)
3. Configure environment variables for production

#### Option 2: Docker Deployment

A Dockerfile is provided for containerized deployment:

```bash
# Build the Docker image
docker build -t notey-app .

# Run the container
docker run -p 3000:3000 -p 3001:3001 notey-app
```

#### Database Migration

Before deploying to production, run database migrations:

```bash
cd backend
npm run db:migrate
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

This project uses ESLint and Prettier for code formatting. Before submitting a PR, please ensure your code follows the style guidelines:

```bash
# Check code style
npm run lint

# Fix code style issues
npm run lint:fix
```

## Troubleshooting

### Common Issues

#### Database Connection Problems

```
Error: SequelizeConnectionError: Access denied for user...
```

**Solution**: Verify your MySQL credentials in the `.env` file and ensure the MySQL server is running.

#### Frontend Build Issues

```
Error: Module not found: Can't resolve...
```

**Solution**: Run `npm install` to ensure all dependencies are properly installed.

#### API Connection Errors

```
Error: Network Error
```

**Solution**: Ensure the backend server is running and check that the API URL in the frontend configuration is correct.

#### JWT Authentication Issues

```
Error: Invalid token
```

**Solution**: Clear browser cookies/local storage and log in again. Verify that the JWT_SECRET in the backend `.env` file is set correctly.

### Getting Help

If you encounter issues not covered in this troubleshooting guide:

1. Check the GitHub Issues page for similar problems and solutions
2. Create a new issue with detailed information about the problem
3. Include relevant error messages and steps to reproduce the issue

## License

This project is licensed under the MIT License.