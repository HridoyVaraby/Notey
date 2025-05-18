# System Patterns: Notey

## System Architecture

Notey follows a modern client-server architecture with clear separation of concerns:

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Frontend   │◄────►│   Backend    │◄────►│   Database   │
│    (React)   │      │  (Node.js)   │      │   (MySQL)    │
└─────────────┘      └─────────────┘      └─────────────┘
```

### Frontend Architecture
The React frontend follows a component-based architecture with the following structure:

```
├── public/                # Static files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components (buttons, inputs, etc.)
│   │   ├── layout/        # Layout components (header, sidebar, etc.)
│   │   ├── tasks/         # Task-related components
│   │   └── notes/         # Note-related components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts for state management
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service functions
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
```

### Backend Architecture
The Node.js/Express backend follows a layered architecture:

```
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/            # Data models
│   ├── routes/            # API route definitions
│   ├── middleware/        # Express middleware
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   └── app.js             # Application setup
```

### Database Schema

```
┌─────────────────┐       ┌─────────────────┐
│      Users      │       │      Tasks       │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ id (PK)         │
│ username        │       │ title           │
│ email           │       │ description     │
│ password_hash   │       │ due_date        │
│ created_at      │       │ priority        │
│ updated_at      │       │ completed       │
└─────────────────┘       │ user_id (FK)    │
        │                 │ created_at      │
        │                 │ updated_at      │
        │                 └─────────────────┘
        │                         │
        │                         │
        │                 ┌─────────────────┐
        │                 │      Tags       │
        │                 ├─────────────────┤
        │                 │ id (PK)         │
        │                 │ name            │
        │                 │ user_id (FK)    │
        │                 └─────────────────┘
        │                         │
        │                         │
        │                 ┌─────────────────┐
        │                 │   Task_Tags     │
        │                 ├─────────────────┤
        │                 │ task_id (FK)    │
        │                 │ tag_id (FK)     │
        │                 └─────────────────┘
        │
        │
┌─────────────────┐       ┌─────────────────┐
│      Notes      │       │   Note_Tags     │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ note_id (FK)    │
│ title           │       │ tag_id (FK)     │
│ content         │       └─────────────────┘
│ user_id (FK)    │
│ created_at      │
│ updated_at      │
└─────────────────┘
```

## Key Technical Decisions

1. **State Management**
   - React Context API for global state management
   - Local component state for UI-specific state
   - Redux may be considered for more complex state requirements in future iterations

2. **API Design**
   - RESTful API design principles
   - JWT for authentication and authorization
   - Consistent error handling and response formats

3. **Database Design**
   - Normalized relational schema
   - Foreign key constraints for data integrity
   - Indexes on frequently queried columns

4. **Styling Approach**
   - Tailwind CSS for utility-first styling
   - Component-based styling for reusability
   - Responsive design for all screen sizes

## Design Patterns in Use

1. **Frontend Patterns**
   - Component Composition for UI building blocks
   - Container/Presentational pattern for separation of concerns
   - Custom hooks for reusable logic
   - Context providers for state management

2. **Backend Patterns**
   - MVC (Model-View-Controller) for API organization
   - Repository pattern for data access
   - Middleware pattern for request processing
   - Service layer for business logic

3. **General Patterns**
   - Dependency Injection for testability
   - Factory pattern for object creation
   - Observer pattern for event handling
   - Strategy pattern for algorithm selection

## Component Relationships

1. **Authentication Flow**
   - Login/Register components → Auth service → JWT token → Protected routes

2. **Task Management Flow**
   - Task components → Task service → Task controllers → Task models → Database

3. **Note Management Flow**
   - Note components → Note service → Note controllers → Note models → Database

## Critical Implementation Paths

1. **User Authentication**
   - Registration and login functionality
   - JWT token generation and validation
   - Protected route implementation

2. **Data Persistence**
   - Database schema creation
   - Model implementation
   - CRUD operations for tasks and notes

3. **UI Components**
   - Reusable component library
   - Page layouts and navigation
   - Form handling and validation