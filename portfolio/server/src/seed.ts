import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Project from './models/Project.js';
import Blog from './models/Blog.js';
import logger from './config/logger.js';

dotenv.config();

const seedData = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

  try {
    logger.info('Connecting to database for seeding...');
    await mongoose.connect(uri);
    logger.info('Connected to MongoDB');

    // 1) Clean database
    logger.info('Cleaning database collections...');
    await User.deleteMany({});
    await Project.deleteMany({});
    await Blog.deleteMany({});
    logger.info('Collections cleaned.');

    // 2) Seed Admin User
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'adminpassword';
    
    logger.info(`Creating Admin user: ${adminUsername}...`);
    const admin = new User({
      username: adminUsername,
      password: adminPassword,
    });
    await admin.save();
    logger.info('Admin user created successfully');

    // 3) Seed Projects (5-8 advanced projects)
    logger.info('Creating portfolio projects...');
    const projects = [
      {
        title: 'AI Mock Interview Coach',
        category: 'Fullstack',
        description: 'An AI-powered SaaS web application that generates interview questions, records audio/text answers, and provides automated, performance-based AI evaluation scores.',
        longDescription: `### The Challenge
Preparing for technical interviews is stressful, and manual mock interviews are expensive and hard to schedule. I wanted to build a scaleable platform where users can practice mock interviews with real-time AI feedback.

### Key Solutions Implemented
- **AI Question Generation**: Integrated Gemini/OpenAI API to generate context-relevant questions based on job description, experience level, and tech stack.
- **Speech-to-Text**: Utilized Web Speech API for real-time speech translation directly in the browser.
- **Robust MERN Core**: Implemented JWT auth, MongoDB indexing on user attempts, and structured Express controllers.

### Engineering Metrics
- **Performance**: 98% Lighthouse performance score through code splitting and asset lazy loading.
- **Database Speed**: 40ms average query response time by indexing \`userId\` and \`attemptId\`.`,
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Framer Motion'],
        features: [
          'Dynamic AI question generator using LLM APIs',
          'Voice feedback capturing with instant transcriptions',
          'Secure dashboard with past interview analytics and tips',
        ],
        githubUrl: 'https://github.com/Shreenithiyak/mock-interview',
        liveUrl: 'https://mock-interview-ashen-theta.vercel.app/',
        metrics: { stars: 12, forks: 4, performanceScore: '98%', lighthouseScore: '100' },
        sortOrder: 1,
      },
      {
        title: 'Developer Metrics Dashboard',
        category: 'Fullstack',
        description: 'A developer dashboard that integrates with GitHub, Jira, and Vercel APIs to aggregate team metrics, build statuses, deployment logs, and commit frequencies into a single real-time UI.',
        longDescription: `### The Challenge
Software teams struggle to track productivity metrics across multiple services. Navigating GitHub, Jira, and Vercel individually is tedious.

### Key Solutions Implemented
- **Multi-API Integration**: Built REST aggregators in Express that query GitHub, Jira, and Vercel REST APIs in parallel.
- **Real-Time Updates**: Leveraged Server-Sent Events (SSE) or WebSockets to pipe live deployment statuses to the dashboard.
- **Advanced Caching**: Applied Redis/in-memory caching with TTL to decrease upstream API rate-limiting blocks by 80%.`,
        tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
        features: [
          'Unified search and filtering for PRs, issues, and deployments',
          'Interactive charts plotting throughput and deployment speeds',
          'Encrypted OAuth2 credentials storage for user integrations',
        ],
        githubUrl: 'https://github.com/Shreenithiyak/dev-metrics-dash',
        liveUrl: 'https://github.com/Shreenithiyak/dev-metrics-dash',
        metrics: { stars: 18, forks: 2, performanceScore: '96%', lighthouseScore: '98' },
        sortOrder: 2,
      },
      {
        title: 'Markdown CMS & Blog Engine',
        category: 'Backend',
        description: 'A headless blogging API supporting MDX file rendering, secure token rotations, image uploads, view tracking, tag searches, and an admin content editor.',
        longDescription: `### The Challenge
Generic CMS systems are bloated and slow. I wanted a developer-focused blog engine that works directly with raw Markdown and serves contents fast.

### Key Solutions Implemented
- **Metadata Parser**: Parsed frontmatter dynamically on file upload to extract publication dates and tags.
- **Security First**: Created JWT token auth with rotatable Refresh Tokens stored in HTTP-only cookies.
- **Lighthouse Performance**: Enabled Gzip compression and aggressive Cache-Control header middleware to ensure high speed.`,
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
        features: [
          'Fast markdown-to-HTML parsing with metadata extraction',
          'Secure JWT authentication middleware and token rotation',
          'Database indexing on slugs and tag fields for lightning-fast queries',
        ],
        githubUrl: 'https://github.com/Shreenithiyak/markdown-cms-api',
        liveUrl: 'https://github.com/Shreenithiyak/markdown-cms-api',
        metrics: { stars: 8, forks: 1, performanceScore: '99%', lighthouseScore: '100' },
        sortOrder: 3,
      },
      {
        title: 'Microservices Deployment Monitor',
        category: 'Backend',
        description: 'A lightweight microservices monitoring agent that pings health check endpoints, tracks RAM/CPU usage, and alerts developers via Discord/Slack hooks upon node failures.',
        longDescription: `### The Challenge
Heavyweight APM tools (Datadog, NewRelic) can be prohibitively expensive for personal projects or small startups.

### Key Solutions Implemented
- **Cron Agent**: Scheduled cron tasks using node-cron to ping health endpoints at 10-second intervals.
- **System Metrics**: Utilized \`os-utils\` to query CPU load and available memory on host servers.
- **Discord Integrations**: Automated Webhook calls to pipe status failures directly to channel chats.`,
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Winston Logger', 'Nodemailer'],
        features: [
          'Automated host polling and instant webhook alerts',
          'Express admin API to view logs and register new microservices',
          'Disk space usage checkers with clean notification logs',
        ],
        githubUrl: 'https://github.com/Shreenithiyak/service-monitor',
        liveUrl: 'https://github.com/Shreenithiyak/service-monitor',
        metrics: { stars: 15, forks: 3, performanceScore: '97%', lighthouseScore: '96' },
        sortOrder: 4,
      },
      {
        title: 'E-commerce API with Stripe & Inventory Ledger',
        category: 'Fullstack',
        description: 'A complete checkout and backend inventory system implementing optimistic locking for stock consistency, Stripe integration, and PDF invoice generation.',
        longDescription: `### The Challenge
Ensuring stock consistency during concurrent flash sales is a classical concurrency problem. Multiple customers buying the last item at the same millisecond can lead to over-selling.

### Key Solutions Implemented
- **Optimistic Concurrency Control (OCC)**: Leveraged Mongoose schema version keys (\`__v\`) to guarantee that update transactions fail if stock was modified in-between fetch and save.
- **Stripe Webhooks**: Listened to checkout webhooks asynchronously to verify payments and release inventory reservations securely.
- **PDF Ledger**: Generated invoices dynamically in-memory and emailed them to customers automatically.`,
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
        features: [
          'Atomic stock depletion with lock retry loops',
          'Secure payment processing with Stripe Webhook verification',
          'Admin inventory alerts and automatic pdf invoice receipts',
        ],
        githubUrl: 'https://github.com/Shreenithiyak/ecom-ledger',
        liveUrl: 'https://github.com/Shreenithiyak/ecom-ledger',
        metrics: { stars: 22, forks: 7, performanceScore: '94%', lighthouseScore: '95' },
        sortOrder: 5,
      },
    ];

    await Project.insertMany(projects);
    logger.info(`Inserted ${projects.length} projects successfully`);

    // 4) Seed Blogs (2 initial blogs in markdown)
    logger.info('Creating blog posts...');
    const blogs = [
      {
        title: 'Mastering JWT Authentication in Node.js & Express',
        slug: 'mastering-jwt-authentication-node-express',
        summary: 'A deep-dive tutorial on implementing secure token rotation with Access and Refresh tokens in full-stack MERN apps.',
        content: `## Introduction
JSON Web Tokens (JWTs) are the industry standard for securing stateless RESTful APIs. However, many developers compromise security by storing tokens in insecure locations or neglecting token rotation. In this post, we'll design a bulletproof authentication flow.

## The Architecture
A secure JWT system utilizes two tokens:
1. **Access Token**: Short-lived (e.g., 15 minutes). Used to authorize requests. Sent in the \`Authorization: Bearer <token>\` header.
2. **Refresh Token**: Long-lived (e.g., 7 days). Used to request new Access Tokens. Stored in an \`HTTP-only, Secure, SameSite=Strict\` cookie.

\`\`\`mermaid
sequenceDiagram
    Client->>Server: POST /login with credentials
    Server->>Server: Verify Password
    Server->>Client: Send AccessToken (body) & RefreshToken (Secure Cookie)
    Client->>Server: Request /api/protected with AccessToken
    Server->>Client: 200 OK (Protected Data)
\`\`\`

## Storing the Refresh Token
By storing the Refresh Token in a cookie with the flags \`httpOnly: true\` and \`secure: true\`, we prevent JavaScript code from accessing the token, successfully mitigating Cross-Site Scripting (XSS) risks.

## Implementing Refresh Token Rotation
To prevent refresh tokens from being reused indefinitely if intercepted, we rotate them. Every time the client requests a new access token using their refresh token:
- The server verifies the refresh token.
- The server checks if it's in the user's active list in MongoDB.
- The server deletes the old refresh token, generates a brand new access token AND a brand new refresh token, and sets the new refresh token cookie on the client.

This ensures that a refresh token is only ever used once, drastically lowering the impact of a compromised key.`,
        tags: ['Security', 'Node.js', 'Express', 'JWT'],
        coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
        readTime: '6 min read',
        views: 124,
        isPublished: true,
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      },
      {
        title: 'Why You Should Switch to React Query (TanStack Query)',
        slug: 'switch-to-react-query',
        summary: 'Learn how to simplify state management, eliminate boilerplate useEffect code, and cache API queries in your React applications.',
        content: `## The Problem with Redux/useEffect for Fetching
For years, React developers fetched server data inside \`useEffect\` hooks and loaded them into global state containers like Redux or Context:

\`\`\`javascript
// The old, boilerplate way
useEffect(() => {
  setLoading(true);
  fetch('/api/projects')
    .then(res => res.json())
    .then(data => {
      setProjects(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);
\`\`\`

This approach requires extensive boilerplate code to manage loading states, error states, caching, and polling manually.

## Enter React Query
React Query is a server-state library. It abstracts away all fetching, caching, synchronizing, and updating of server data:

\`\`\`typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects
});
\`\`\`

## Core Advantages
1. **Automatic Caching**: Data is cached out-of-the-box. Subsequent components requesting the same query will read from cache instantly.
2. **Background Refetching**: Caches are refetched silently in the background when the user focuses the window or reconnects to the network, keeping the UI consistently fresh.
3. **Optimistic Updates**: When updating data (e.g., liking a project), React Query can modify local cache instantly before the API call finishes, providing a highly responsive user experience.`,
        tags: ['React', 'Frontend', 'React Query', 'TypeScript'],
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
        readTime: '4 min read',
        views: 89,
        isPublished: true,
        publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
    ];

    await Blog.insertMany(blogs);
    logger.info(`Inserted ${blogs.length} blog posts successfully`);

    logger.info('Database seeding completed successfully!');
  } catch (error) {
    logger.error('Failed to seed database: %o', error);
  } finally {
    logger.info('Closing Mongoose connection...');
    await mongoose.connection.close();
    logger.info('Connection closed.');
  }
};

seedData();
