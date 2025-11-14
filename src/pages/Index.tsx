import { BookOpen, Database, Code, Server } from "lucide-react";
import { DocSection } from "@/components/DocSection";
import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";
import { ToolCard } from "@/components/ToolCard";
import { InfoBox } from "@/components/InfoBox";
import { InteractiveCodeSection } from "@/components/InteractiveCodeSection";
import { Card } from "@/components/ui/card";

const Index = () => {
  const tocItems = [
    { id: "overview", title: "Overview" },
    { id: "prerequisites", title: "Prerequisites" },
    { id: "mongodb-atlas", title: "MongoDB Atlas Setup" },
    { id: "project-structure", title: "Project Structure" },
    { id: "interactive-playground", title: "Interactive Playground" },
    { id: "backend-setup", title: "Backend Setup" },
    { id: "frontend-setup", title: "Frontend Setup" },
    { id: "mongodb-compass", title: "MongoDB Compass" },
    { id: "testing", title: "Testing" },
    { id: "summary", title: "Summary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-docnav text-docnav-foreground border-b border-border/30 sticky top-0 z-50 backdrop-blur-sm bg-docnav/95">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-docnav-accent" />
            <div>
              <h1 className="text-2xl font-bold">Full Stack Todo Application</h1>
              <p className="text-sm text-docnav-foreground/70">
                React + Express + MongoDB Atlas
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {/* Overview */}
            <DocSection id="overview" title="Overview">
              <p className="text-lg leading-relaxed">
                This documentation provides a comprehensive guide to building a full-stack
                Todo application using modern web technologies. You will learn how to
                create a complete CRUD application with a React frontend, Express backend,
                and MongoDB Atlas database.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="p-6 border-border/50 text-center">
                  <Code className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">React Frontend</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern UI with React and Axios
                  </p>
                </Card>
                <Card className="p-6 border-border/50 text-center">
                  <Server className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Express Backend</h3>
                  <p className="text-sm text-muted-foreground">
                    RESTful API with Node.js
                  </p>
                </Card>
                <Card className="p-6 border-border/50 text-center">
                  <Database className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">MongoDB Atlas</h3>
                  <p className="text-sm text-muted-foreground">
                    Cloud database solution
                  </p>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Learning Objectives</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create and configure a MongoDB Atlas database</li>
                <li>Connect the database to a Node.js backend using Mongoose</li>
                <li>Build a React frontend to interact with the backend API</li>
                <li>Implement full CRUD operations (Create, Read, Update, Delete)</li>
                <li>View and manage data in MongoDB Compass</li>
              </ul>
            </DocSection>

            {/* Prerequisites */}
            <DocSection id="prerequisites" title="Prerequisites">
              <p>
                Before starting, ensure you have the following software installed on your
                Windows system:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <ToolCard
                  name="Node.js (v18+)"
                  description="JavaScript runtime environment"
                  link="https://nodejs.org/"
                />
                <ToolCard
                  name="Git"
                  description="Version control system"
                  link="https://git-scm.com/downloads"
                />
                <ToolCard
                  name="MongoDB Compass"
                  description="GUI for MongoDB"
                  link="https://www.mongodb.com/try/download/compass"
                />
                <ToolCard
                  name="VS Code"
                  description="Code editor"
                  link="https://code.visualstudio.com/"
                />
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Verify Installation</h3>
              <p className="mb-4">
                After installation, verify Node.js and npm by opening Command Prompt or
                PowerShell and running:
              </p>
              <CodeBlock>
                {`node -v
npm -v`}
              </CodeBlock>
              <InfoBox type="success">
                If you see version numbers (e.g., v18.x.x and 9.x.x), the installation was
                successful.
              </InfoBox>
            </DocSection>

            {/* MongoDB Atlas Setup */}
            <DocSection id="mongodb-atlas" title="MongoDB Atlas Setup">
              <p className="text-lg font-medium mb-4">
                MongoDB Atlas is a cloud-based database service that provides a free tier
                for development and learning.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Create an Atlas Account</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Navigate to <a href="https://www.mongodb.com/atlas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.mongodb.com/atlas</a></li>
                <li>Sign up with your Google account or email</li>
                <li>Create a Free Shared Cluster</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Configure the Cluster</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Choose AWS, Google Cloud, or Azure as your cloud provider</li>
                <li>Select a nearby region (e.g., Mumbai, Singapore, or US-East)</li>
                <li>Click Create Cluster and wait for deployment (2-5 minutes)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Create a Database User</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In the left sidebar, select Database Access</li>
                <li>Click Add New Database User</li>
                <li>Set a username and password (e.g., student / student123)</li>
                <li>Choose Read and Write to Any Database</li>
                <li>Click Add User</li>
              </ol>

              <InfoBox type="warning">
                Save your credentials securely. You will need them to connect to the
                database.
              </InfoBox>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Set Network Access</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In the sidebar, go to Network Access</li>
                <li>Click Add IP Address</li>
                <li>Choose Allow Access from Anywhere (0.0.0.0/0)</li>
                <li>Confirm and save</li>
              </ol>

              <InfoBox type="info">
                For production applications, restrict IP access to specific addresses.
              </InfoBox>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 5: Get the Connection String</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Go to Clusters and click Connect</li>
                <li>Choose Connect your application</li>
                <li>Select Node.js as the driver</li>
                <li>Copy the connection string</li>
              </ol>

              <CodeBlock title="Example Connection String">
                {`mongodb+srv://student:student123@cluster0.abcd.mongodb.net/todo_demo`}
              </CodeBlock>

              <InfoBox type="warning">
                Replace the password placeholder in the connection string with your actual
                password.
              </InfoBox>
            </DocSection>

            {/* Interactive Playground */}
            <DocSection id="interactive-playground" title="Interactive Code Playground">
              <InteractiveCodeSection />
            </DocSection>

            {/* Project Structure */}
            <DocSection id="project-structure" title="Project Structure">
              <p>Create a new folder for your project with the following structure:</p>
              <CodeBlock title="Directory Structure">
                {`todo-fullstack/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    └── package.json`}
              </CodeBlock>

              <p className="mt-4">
                Open a terminal in your desired location and create the project directory:
              </p>
              <CodeBlock>
                {`mkdir todo-fullstack
cd todo-fullstack
mkdir backend frontend`}
              </CodeBlock>
            </DocSection>

            {/* Backend Setup */}
            <DocSection id="backend-setup" title="Backend Setup">
              <h3 className="text-xl font-semibold mb-4">Step 1: Initialize Backend</h3>
              <p>Navigate to the backend folder and initialize a new Node.js project:</p>
              <CodeBlock>
                {`cd backend
npm init -y`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 2: Install Dependencies</h3>
              <p className="mb-4">Install the required packages:</p>
              <CodeBlock>
                {`npm install express mongoose cors
npm install -D nodemon`}
              </CodeBlock>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Package Descriptions:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>express</strong>: Web framework for Node.js</li>
                  <li><strong>mongoose</strong>: MongoDB object modeling tool</li>
                  <li><strong>cors</strong>: Enable Cross-Origin Resource Sharing</li>
                  <li><strong>nodemon</strong>: Auto-restart server on file changes</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 3: Create server.js</h3>
              <p className="mb-4">
                Create a new file named <code className="bg-muted px-2 py-1 rounded">server.js</code> in the backend folder:
              </p>
              <CodeBlock title="backend/server.js">
                {`// server.js - Todo API (CRUD)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todo_demo';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[backend] MongoDB connected'))
  .catch(err => {
    console.error('[backend] MongoDB connection error:', err);
    process.exit(1);
  });

// Todo schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Update timestamps
todoSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});
todoSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes

// GET /todos - list all todos (newest first)
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }).lean();
    res.json(todos);
  } catch (err) {
    console.error('[backend] GET /todos error', err);
    res.status(500).json({ error: 'internal server error' });
  }
});

// POST /todos - create a new todo
app.post('/todos', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: 'text is required' });
    }
    const todo = new Todo({ text: text.trim() });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    console.error('[backend] POST /todos error', err);
    res.status(500).json({ error: 'internal server error' });
  }
});

// PUT /todos/:id - update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = {};
    if (typeof req.body.text !== 'undefined') update.text = req.body.text;
    if (typeof req.body.done !== 'undefined') update.done = req.body.done;
    const todo = await Todo.findByIdAndUpdate(id, update, { 
      new: true, 
      runValidators: true 
    });
    if (!todo) return res.status(404).json({ error: 'not found' });
    res.json(todo);
  } catch (err) {
    console.error('[backend] PUT /todos/:id error', err);
    res.status(500).json({ error: 'internal server error' });
  }
});

// DELETE /todos/:id - delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ error: 'not found' });
    res.json({ success: true });
  } catch (err) {
    console.error('[backend] DELETE /todos/:id error', err);
    res.status(500).json({ error: 'internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`[backend] listening on \${PORT}\`));`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 4: Update package.json</h3>
              <p className="mb-4">Add the following scripts to your <code className="bg-muted px-2 py-1 rounded">package.json</code>:</p>
              <CodeBlock title="backend/package.json (scripts section)">
                {`"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 5: Update Connection String</h3>
              <p className="mb-4">
                In <code className="bg-muted px-2 py-1 rounded">server.js</code>, replace the MONGO_URI with your MongoDB Atlas connection string:
              </p>
              <CodeBlock>
                {`const MONGO_URI = 'mongodb+srv://student:student123@cluster0.abcd.mongodb.net/todo_demo';`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 6: Run the Backend</h3>
              <CodeBlock>
                {`npm run dev`}
              </CodeBlock>

              <InfoBox type="success">
                If successful, you should see: <br />
                <code className="block mt-2 bg-code-bg text-code-foreground p-2 rounded">
                  [backend] MongoDB connected<br />
                  [backend] listening on 5000
                </code>
              </InfoBox>
            </DocSection>

            {/* Frontend Setup */}
            <DocSection id="frontend-setup" title="Frontend Setup">
              <h3 className="text-xl font-semibold mb-4">Step 1: Create React App</h3>
              <p className="mb-4">
                From the root folder (todo-fullstack), create a new React application:
              </p>
              <CodeBlock>
                {`npx create-react-app frontend
cd frontend
npm install axios`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 2: Update App.js</h3>
              <p className="mb-4">
                Replace the contents of <code className="bg-muted px-2 py-1 rounded">frontend/src/App.js</code>:
              </p>
              <CodeBlock title="frontend/src/App.js">
                {`// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function TodoItem({ todo, onToggle, onDelete, onStartEdit, onSaveEdit }) {
  const [editingText, setEditingText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditingText(todo.text);
  }, [todo.text]);

  function startEdit() {
    setIsEditing(true);
    onStartEdit && onStartEdit(todo._id);
  }

  function save() {
    const text = editingText.trim();
    if (!text) return;
    onSaveEdit(todo._id, text).then(() => setIsEditing(false));
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: 8,
      borderBottom: '1px solid #eee'
    }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo._id, !todo.done)}
      />
      <div style={{ flex: 1, marginLeft: 12 }}>
        {isEditing ? (
          <input
            value={editingText}
            onChange={e => setEditingText(e.target.value)}
            onKeyDown={e => { 
              if (e.key === 'Enter') save(); 
              if (e.key === 'Escape') setIsEditing(false); 
            }}
            style={{ width: '100%', padding: 6 }}
          />
        ) : (
          <div style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </div>
        )}
        <div style={{ fontSize: 12, color: '#666' }}>
          {new Date(todo.createdAt).toLocaleString()}
        </div>
      </div>

      {isEditing ? (
        <button onClick={save} style={{ marginLeft: 8 }}>Save</button>
      ) : (
        <button onClick={startEdit} style={{ marginLeft: 8 }}>Edit</button>
      )}
      <button onClick={() => onDelete(todo._id)} style={{ marginLeft: 8 }}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { fetchTodos(); }, []);

  async function fetchTodos() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(\`\${API}/todos\`);
      setTodos(res.data);
    } catch (err) {
      setError('Failed to load todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setCreating(true);
    try {
      await axios.post(\`\${API}/todos\`, { text: text.trim() });
      setText('');
      fetchTodos();
    } catch (err) {
      setError('Failed to create todo');
      console.error(err);
    } finally {
      setCreating(false);
    }
  }

  async function toggleTodo(id, done) {
    try {
      await axios.put(\`\${API}/todos/\${id}\`, { done });
      setTodos(prev => prev.map(t => t._id === id ? { ...t, done } : t));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  }

  async function deleteTodo(id) {
    if (!window.confirm('Delete this todo?')) return;
    try {
      await axios.delete(\`\${API}/todos/\${id}\`);
      setTodos(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      setError('Failed to delete');
      console.error(err);
    }
  }

  async function saveEdit(id, newText) {
    try {
      await axios.put(\`\${API}/todos/\${id}\`, { text: newText });
      setTodos(prev => prev.map(t => t._id === id ? { ...t, text: newText } : t));
    } catch (err) {
      setError('Failed to save edit');
      console.error(err);
    }
  }

  return (
    <div style={{ 
      maxWidth: 760, 
      margin: '40px auto', 
      fontFamily: 'Segoe UI, Roboto, sans-serif' 
    }}>
      <h1>Todo Demo — Simple CRUD</h1>

      <form onSubmit={addTodo} style={{ display: 'flex', marginBottom: 16 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a new todo..."
          style={{ flex: 1, padding: 10 }}
        />
        <button 
          type="submit" 
          disabled={creating} 
          style={{ marginLeft: 8, padding: '8px 12px' }}
        >
          {creating ? 'Adding...' : 'Add'}
        </button>
      </form>

      {error && <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>}

      <div style={{ border: '1px solid #e6e6e6', borderRadius: 6 }}>
        {loading ? <div style={{ padding: 12 }}>Loading...</div> : null}
        {!loading && todos.length === 0 ? (
          <div style={{ padding: 12 }}>No todos yet</div>
        ) : null}
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onSaveEdit={saveEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 3: Start React Development Server</h3>
              <CodeBlock>
                {`npm start`}
              </CodeBlock>

              <InfoBox type="success">
                Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:3000</a> in your browser. You should be able to:<br />
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>Add new tasks</li>
                  <li>Mark tasks as complete/incomplete</li>
                  <li>Edit task text</li>
                  <li>Delete tasks</li>
                </ul>
              </InfoBox>
            </DocSection>

            {/* MongoDB Compass */}
            <DocSection id="mongodb-compass" title="Viewing Data in MongoDB Compass">
              <p>
                MongoDB Compass is a powerful GUI tool that allows you to visualize and
                manage your database data.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 1: Open MongoDB Compass</h3>
              <p>Launch MongoDB Compass on your system.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 2: Connect to Atlas</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Click New Connection</li>
                <li>Paste your MongoDB Atlas connection string</li>
                <li>Click Connect</li>
              </ol>
              <CodeBlock title="Example Connection String">
                {`mongodb+srv://student:student123@cluster0.abcd.mongodb.net/todo_demo`}
              </CodeBlock>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 3: Navigate to Your Data</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In the left sidebar, select your database: <strong>todo_demo</strong></li>
                <li>Click on the collection: <strong>todos</strong></li>
                <li>You will see all documents representing your todo items</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-4">Step 4: Interact with Data</h3>
              <p>In MongoDB Compass, you can:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View all document fields (text, done, createdAt, updatedAt)</li>
                <li>Edit documents directly by clicking on them</li>
                <li>Delete documents using the trash icon</li>
                <li>Add new documents manually</li>
                <li>Filter and search documents</li>
              </ul>

              <InfoBox type="info">
                Any changes made in Compass will be reflected in your React application
                after refreshing the page.
              </InfoBox>
            </DocSection>

            {/* Testing */}
            <DocSection id="testing" title="Testing Your Application">
              <h3 className="text-xl font-semibold mb-4">Complete Workflow Test</h3>
              
              <ol className="space-y-4">
                <li>
                  <strong>1. Ensure Backend is Running</strong>
                  <CodeBlock>
                    {`cd backend
npm run dev`}
                  </CodeBlock>
                </li>
                
                <li>
                  <strong>2. Ensure Frontend is Running</strong>
                  <CodeBlock>
                    {`cd frontend
npm start`}
                  </CodeBlock>
                </li>
                
                <li>
                  <strong>3. Test CRUD Operations in Browser</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Open http://localhost:3000</li>
                    <li>Add a new todo item</li>
                    <li>Mark it as complete</li>
                    <li>Edit the text</li>
                    <li>Delete the item</li>
                  </ul>
                </li>
                
                <li>
                  <strong>4. Verify in MongoDB Compass</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Open Compass and connect to your database</li>
                    <li>Navigate to todo_demo &gt; todos collection</li>
                    <li>Verify that your todos appear</li>
                    <li>Try editing a document in Compass</li>
                    <li>Refresh your React app to see the changes</li>
                  </ul>
                </li>
              </ol>

              <InfoBox type="success">
                If all steps work correctly, congratulations! You have successfully built
                and tested a full-stack application.
              </InfoBox>
            </DocSection>

            {/* Summary */}
            <DocSection id="summary" title="Summary">
              <h3 className="text-xl font-semibold mb-4">What You Have Learned</h3>
              <p className="mb-4">By completing this tutorial, you have gained knowledge in:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Database Management
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>Setting up MongoDB Atlas</li>
                    <li>Creating database users and configuring access</li>
                    <li>Using MongoDB Compass to view and edit data</li>
                  </ul>
                </Card>

                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Backend Development
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>Creating RESTful APIs with Express</li>
                    <li>Connecting to MongoDB using Mongoose</li>
                    <li>Implementing CRUD operations</li>
                  </ul>
                </Card>

                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Frontend Development
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>Building user interfaces with React</li>
                    <li>Making HTTP requests with Axios</li>
                    <li>Managing state with React hooks</li>
                  </ul>
                </Card>

                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Full Stack Integration
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>Connecting frontend to backend APIs</li>
                    <li>Understanding client-server architecture</li>
                    <li>Debugging and testing full-stack applications</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Optional Enhancements</h3>
              <p className="mb-4">For further practice, consider implementing:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Add a due date field to each todo</li>
                <li>Implement filtering for completed vs pending tasks</li>
                <li>Add priority levels (high, medium, low)</li>
                <li>Deploy the backend to Render or Railway</li>
                <li>Deploy the frontend to Vercel or Netlify</li>
                <li>Use environment variables (.env) for sensitive data</li>
                <li>Add user authentication</li>
              </ul>

              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded">
                <h4 className="font-semibold text-lg mb-2">Next Steps</h4>
                <p className="text-sm">
                  Continue building on this foundation by exploring advanced topics such
                  as authentication, data validation, error handling, and production
                  deployment strategies. The skills you have learned here form the basis
                  for developing modern full-stack web applications.
                </p>
              </div>
            </DocSection>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t border-border/30 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>Full Stack Todo Application Documentation</p>
          <p className="mt-2">Built with React + Express + MongoDB Atlas</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
