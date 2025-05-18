const bcrypt = require('bcrypt');
const db = require('../models');

// Function to seed the database with test data
async function seedDatabase() {
  try {
    // Sync database models
    await db.sequelize.sync({ force: true });
    console.log('Database synced');

    // Create test users
    const users = [
      {
        username: 'testuser1',
        email: 'test1@example.com',
        password: await bcrypt.hash('password123', 10)
      },
      {
        username: 'testuser2',
        email: 'test2@example.com',
        password: await bcrypt.hash('password123', 10)
      }
    ];

    const createdUsers = await Promise.all(
      users.map(user => db.User.create(user))
    );
    console.log(`${createdUsers.length} users created`);

    // Create test tasks
    const tasks = [
      {
        title: 'Complete project setup',
        description: 'Set up the initial project structure and dependencies',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        priority: 'high',
        status: 'completed',
        tags: JSON.stringify(['setup', 'project']),
        userId: createdUsers[0].id
      },
      {
        title: 'Implement authentication',
        description: 'Create login and registration functionality',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        priority: 'high',
        status: 'completed',
        tags: JSON.stringify(['auth', 'security']),
        userId: createdUsers[0].id
      },
      {
        title: 'Design dashboard',
        description: 'Create UI design for the main dashboard',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        priority: 'medium',
        status: 'in-progress',
        tags: JSON.stringify(['design', 'ui']),
        userId: createdUsers[0].id
      },
      {
        title: 'Meeting with client',
        description: 'Discuss project requirements and timeline',
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
        priority: 'high',
        status: 'pending',
        tags: JSON.stringify(['meeting', 'client']),
        userId: createdUsers[1].id
      },
      {
        title: 'Research competitors',
        description: 'Analyze similar products in the market',
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        priority: 'low',
        status: 'pending',
        tags: JSON.stringify(['research', 'market']),
        userId: createdUsers[1].id
      }
    ];

    const createdTasks = await Promise.all(
      tasks.map(task => db.Task.create(task))
    );
    console.log(`${createdTasks.length} tasks created`);

    // Create test notes
    const notes = [
      {
        title: 'Project Ideas',
        content: 'Here are some ideas for the project: 1. Add dark mode, 2. Implement drag and drop for tasks, 3. Add calendar view',
        color: '#f9d5e5',
        tags: JSON.stringify(['ideas', 'features']),
        userId: createdUsers[0].id
      },
      {
        title: 'Meeting Notes',
        content: 'Discussed project timeline and deliverables. Next meeting scheduled for next week.',
        color: '#d5f9e5',
        tags: JSON.stringify(['meeting', 'client']),
        userId: createdUsers[0].id
      },
      {
        title: 'Resources',
        content: 'Useful links: React documentation, Tailwind CSS documentation, MySQL documentation',
        color: '#e5d5f9',
        tags: JSON.stringify(['resources', 'links']),
        userId: createdUsers[0].id
      },
      {
        title: 'To-Do List',
        content: '1. Complete authentication, 2. Design dashboard, 3. Implement task management',
        color: '#f9e5d5',
        tags: JSON.stringify(['todo', 'tasks']),
        userId: createdUsers[1].id
      },
      {
        title: 'API Endpoints',
        content: 'Authentication: /api/auth/login, /api/auth/register\nTasks: /api/tasks\nNotes: /api/notes',
        color: '#d5e5f9',
        tags: JSON.stringify(['api', 'endpoints']),
        userId: createdUsers[1].id
      }
    ];

    const createdNotes = await Promise.all(
      notes.map(note => db.Note.create(note))
    );
    console.log(`${createdNotes.length} notes created`);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close database connection
    await db.sequelize.close();
  }
}

// Run the seed function
seedDatabase();