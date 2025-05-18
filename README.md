# Notey - Task Manager & Note-Taking App

Notey is a full-stack web application for managing tasks and notes with a clean, intuitive interface. Built with React, Node.js, Express, and MySQL.

## Features

- **User Authentication**: Secure login and registration
- **Task Management**: Create, update, delete, and track tasks with priorities and due dates
- **Note Taking**: Create, edit, and organize notes with tags
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean interface built with Tailwind CSS

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

1. Register a new account or use one of the test accounts:
   - Username: testuser1, Password: password123
   - Username: testuser2, Password: password123

2. Navigate through the dashboard to manage tasks and notes

3. Create, edit, and delete tasks and notes as needed

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

## Testing

Testing infrastructure is currently under development.

## Deployment

Deployment instructions will be added in future updates.

## License

This project is licensed under the MIT License.