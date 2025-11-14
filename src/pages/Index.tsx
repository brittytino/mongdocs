import React, { useState } from 'react';
import { Copy, Check, ChevronRight, Terminal, Database, Layout, CheckCircle2, AlertCircle, Code2, FileCode, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, index: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const CodeBlock: React.FC<{ code: string; language: string; id: string; title?: string }> = ({ 
    code, 
    language, 
    id, 
    title 
  }) => (
    <div className="relative group my-4">
      {title && (
        <div className="flex items-center gap-2 bg-slate-800 text-slate-200 px-4 py-2 rounded-t-lg border-b border-slate-700">
          <FileCode className="w-4 h-4" />
          <span className="text-sm font-mono">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className={`bg-slate-900 text-slate-100 p-4 ${title ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto text-sm leading-relaxed`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 rounded-md transition-all opacity-0 group-hover:opacity-100"
          title="Copy to clipboard"
        >
          {copiedIndex === id ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-slate-300" />
          )}
        </button>
      </div>
    </div>
  );

  const CommandBlock: React.FC<{ command: string; id: string }> = ({ command, id }) => (
    <div className="relative group my-3">
      <div className="flex items-center gap-2 bg-slate-950 text-green-400 px-4 py-3 rounded-lg font-mono text-sm border border-slate-800">
        <Terminal className="w-4 h-4" />
        <code>{command}</code>
        <button
          onClick={() => copyToClipboard(command, id)}
          className="ml-auto p-1.5 bg-slate-800 hover:bg-slate-700 rounded transition-all opacity-0 group-hover:opacity-100"
        >
          {copiedIndex === id ? (
            <Check className="w-3 h-3 text-green-400" />
          ) : (
            <Copy className="w-3 h-3 text-slate-300" />
          )}
        </button>
      </div>
    </div>
  );

  const Section: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    children: React.ReactNode;
    id?: string;
  }> = ({ title, icon, children, id }) => (
    <section id={id} className="mb-12 scroll-mt-20">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-blue-500">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );

  const Step: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ 
    number, 
    title, 
    children 
  }) => (
    <div className="relative pl-8 pb-8 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl font-bold">Full-Stack Todo App</h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            React + Express + MongoDB Laboratory Exercise
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              React
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              Express.js
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              MongoDB
            </span>
          </div>
        </div>
      </div>
      <div className='p-4 bg-green-400 text-black text-center'>
        <button><a href="/demo">Click Here</a></button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Objective Card */}
        <Card className="mb-12 shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle2 className="w-6 h-6 text-blue-500" />
              Objective
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              This doc helps to understand how a full-stack web application works using modern technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Layout className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Frontend</h4>
                <p className="text-sm text-slate-600">React for user interface</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <Terminal className="w-6 h-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Backend</h4>
                <p className="text-sm text-slate-600">Express & Node.js for API</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <Database className="w-6 h-6 text-purple-600 mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Database</h4>
                <p className="text-sm text-slate-600">MongoDB for data storage</p>
              </div>
            </div>
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-slate-700">
                <strong className="font-semibold">Learning Goals:</strong> Set up React frontend, connect Express to MongoDB, perform CRUD operations, and verify data in MongoDB Compass.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Prerequisites */}
        <Section title="Prerequisites" icon={<AlertCircle className="w-6 h-6" />} id="prerequisites">
          <p className="text-slate-700 leading-relaxed">
            Before starting, ensure the following are installed on your computer:
          </p>
          <div className="space-y-3">
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-500" />
                  Node.js and npm
                </h4>
                <p className="text-sm text-slate-600 mb-3">Verify installation:</p>
                <CommandBlock command="node -v" id="node-version" />
                <CommandBlock command="npm -v" id="npm-version" />
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  MongoDB Community Server
                </h4>
                <p className="text-sm text-slate-600">Installed locally and running on port 27017</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                  MongoDB Compass
                </h4>
                <p className="text-sm text-slate-600">GUI tool for viewing databases and collections</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* MongoDB Setup */}
        <Section title="Starting MongoDB (Windows)" icon={<Database className="w-6 h-6" />} id="mongodb">
          <p className="text-slate-700 leading-relaxed">
            MongoDB runs as a Windows service. To ensure it's running:
          </p>
          
          <Tabs defaultValue="gui" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gui">GUI Method</TabsTrigger>
              <TabsTrigger value="cmd">Command Line</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gui" className="space-y-3 mt-4">
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="font-semibold min-w-6">1.</span>
                  <span>Press <kbd className="px-2 py-1 bg-slate-200 rounded text-xs font-mono">Windows + R</kbd>, type <code className="px-2 py-1 bg-slate-100 rounded text-sm">services.msc</code>, and press Enter</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-6">2.</span>
                  <span>Scroll down to find <strong>MongoDB</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-6">3.</span>
                  <span>Right-click MongoDB → select <strong>Start</strong> (if not already running)</span>
                </li>
              </ol>
            </TabsContent>
            
            <TabsContent value="cmd" className="space-y-3 mt-4">
              <p className="text-slate-700">Run Command Prompt as <strong>Administrator</strong>:</p>
              <div className="space-y-2">
                <p className="text-sm text-slate-600 font-semibold">Start MongoDB:</p>
                <CommandBlock command="net start MongoDB" id="start-mongo" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-600 font-semibold">Stop MongoDB:</p>
                <CommandBlock command="net stop MongoDB" id="stop-mongo" />
              </div>
            </TabsContent>
          </Tabs>

          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-slate-700">
              Once running, MongoDB will listen at: <code className="px-2 py-1 bg-white rounded text-sm font-mono">mongodb://127.0.0.1:27017</code>
            </AlertDescription>
          </Alert>
        </Section>

        {/* Project Structure */}
        <Section title="Project Structure" icon={<Layout className="w-6 h-6" />} id="structure">
          <p className="text-slate-700 leading-relaxed mb-4">
            Create a new folder and organize your project:
          </p>
          <CodeBlock
            code={`todo-demo/
├─ backend/
└─ frontend/`}
            language="text"
            id="structure"
            title="Directory Structure"
          />
        </Section>

        {/* Backend Setup */}
        <Section title="Backend Setup (Express + MongoDB)" icon={<Terminal className="w-6 h-6" />} id="backend">
          
          <Step number={1} title="Initialize Backend Project">
            <p className="text-slate-700">Navigate to your project directory and create the backend:</p>
            <CommandBlock command="cd todo-demo" id="cd-todo" />
            <CommandBlock command="mkdir backend" id="mkdir-backend" />
            <CommandBlock command="cd backend" id="cd-backend" />
            <CommandBlock command="npm init -y" id="npm-init" />
            <CommandBlock command="npm install express mongoose cors" id="npm-install-backend" />
          </Step>

          <Step number={2} title="Create server.js">
            <p className="text-slate-700">Create a file named <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">server.js</code> in the backend folder:</p>
            <CodeBlock
              code={`// server.js - Todo API using Express and MongoDB

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const MONGO_URI = 'mongodb://127.0.0.1:27017/todo_demo';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Todo Schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

todoSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 }).lean();
  res.json(todos);
});

// Create a new todo
app.post('/todos', async (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: 'Text is required' });
  const todo = new Todo({ text: text.trim() });
  await todo.save();
  res.status(201).json(todo);
});

// Update a todo (mark done / edit text)
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const update = {};
  if (req.body.text !== undefined) update.text = req.body.text;
  if (req.body.done !== undefined) update.done = req.body.done;
  const todo = await Todo.findByIdAndUpdate(id, update, { new: true });
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ success: true });
});

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`}
              language="javascript"
              id="server-js"
              title="server.js"
            />
          </Step>

          <Step number={3} title="Run the Backend Server">
            <p className="text-slate-700">Start your Express server:</p>
            <CommandBlock command="node server.js" id="run-backend" />
            <Alert className="bg-green-50 border-green-200">
              <Play className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-slate-700">
                <strong>Expected output:</strong><br/>
                <code className="text-xs">MongoDB connected successfully</code><br/>
                <code className="text-xs">Server running on port 5000</code>
              </AlertDescription>
            </Alert>
            <p className="text-slate-700 mt-3">
              The backend is now running at: <a href="http://localhost:5000" className="text-blue-600 hover:underline font-mono text-sm" target="_blank" rel="noopener noreferrer">http://localhost:5000</a>
            </p>
          </Step>
        </Section>

        {/* Frontend Setup */}
        <Section title="Frontend Setup (React)" icon={<Layout className="w-6 h-6" />} id="frontend">
          
          <Step number={1} title="Create React Application">
            <p className="text-slate-700">Open a new terminal window and navigate to the <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">todo-demo</code> folder:</p>
            <CommandBlock command="npx create-react-app frontend" id="create-react" />
            <CommandBlock command="cd frontend" id="cd-frontend" />
            <CommandBlock command="npm install axios" id="npm-axios" />
          </Step>

          <Step number={2} title="Create App.js Component">
            <p className="text-slate-700">Replace the content in <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">src/App.js</code>:</p>
            <CodeBlock
              code={`import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => { fetchTodos(); }, []);

  async function fetchTodos() {
    try {
      const res = await axios.get(\`\${API}/todos\`);
      setTodos(res.data);
    } catch {
      setError('Failed to fetch todos');
    }
  }

  async function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await axios.post(\`\${API}/todos\`, { text: text.trim() });
    setText('');
    fetchTodos();
  }

  async function toggleDone(id, done) {
    await axios.put(\`\${API}/todos/\${id}\`, { done });
    fetchTodos();
  }

  async function deleteTodo(id) {
    await axios.delete(\`\${API}/todos/\${id}\`);
    fetchTodos();
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo Application</h1>
      <form onSubmit={addTodo} style={{ marginBottom: 16 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
          style={{ width: '70%', padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 8, padding: '8px 12px' }}>Add</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo._id} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo._id, !todo.done)}
            />
            <span style={{
              flex: 1,
              marginLeft: 10,
              textDecoration: todo.done ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`}
              language="javascript"
              id="app-js"
              title="src/App.js"
            />
          </Step>

          <Step number={3} title="Run the React Frontend">
            <p className="text-slate-700">Start the React development server:</p>
            <CommandBlock command="npm start" id="npm-start" />
            <Alert className="bg-blue-50 border-blue-200">
              <Play className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-slate-700">
                Your frontend will automatically open at: <a href="http://localhost:3000" className="text-blue-600 hover:underline font-mono" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>
              </AlertDescription>
            </Alert>
          </Step>
        </Section>

        {/* Testing */}
        <Section title="Testing the Application" icon={<CheckCircle2 className="w-6 h-6" />} id="testing">
          <Alert className="bg-amber-50 border-amber-200 mb-4">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-slate-700">
              <strong>Important:</strong> Ensure both servers are running simultaneously in separate terminal windows.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-green-500" />
                  Backend
                </h4>
                <a href="http://localhost:5000" className="text-sm text-blue-600 hover:underline font-mono" target="_blank" rel="noopener noreferrer">
                  http://localhost:5000
                </a>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-blue-500" />
                  Frontend
                </h4>
                <a href="http://localhost:3000" className="text-sm text-blue-600 hover:underline font-mono" target="_blank" rel="noopener noreferrer">
                  http://localhost:3000
                </a>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Test Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex-shrink-0">1</span>
                  <span>Open the React app in your browser</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex-shrink-0">2</span>
                  <span>Add a new todo item using the input field</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex-shrink-0">3</span>
                  <span>Mark a todo as complete by clicking the checkbox</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex-shrink-0">4</span>
                  <span>Delete a todo item using the Delete button</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex-shrink-0">5</span>
                  <span>Verify data changes in MongoDB Compass (see next section)</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </Section>

        {/* MongoDB Compass */}
        <Section title="Viewing Data in MongoDB Compass" icon={<Database className="w-6 h-6" />} id="compass">
          <p className="text-slate-700 leading-relaxed mb-4">
            MongoDB Compass is a GUI tool that lets you visualize and manage your database:
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4 text-slate-700">
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold flex-shrink-0">1</span>
                    <div className="flex-1">
                      <p className="mb-2">Open MongoDB Compass application</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold flex-shrink-0">2</span>
                    <div className="flex-1">
                      <p className="mb-2">In the connection field, enter:</p>
                      <code className="block px-4 py-2 bg-slate-900 text-green-400 rounded font-mono text-sm">mongodb://127.0.0.1:27017</code>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold flex-shrink-0">3</span>
                    <div className="flex-1">
                      <p>Click <strong>Connect</strong></p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold flex-shrink-0">4</span>
                    <div className="flex-1">
                      <p>In the list of databases, open: <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">todo_demo</code></p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold flex-shrink-0">5</span>
                    <div className="flex-1">
                      <p>Click on the <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">todos</code> collection</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Alert className="bg-purple-50 border-purple-200">
              <Database className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-slate-700">
                <strong>Sample Data Structure:</strong> You'll see documents like this in your collection
              </AlertDescription>
            </Alert>

            <CodeBlock
              code={`{
  "_id": "67335b2c4f12b2",
  "text": "WAD Lab Exercise",
  "done": false,
  "createdAt": "2025-11-12T12:33:44.125Z",
  "updatedAt": "2025-11-12T12:33:44.125Z"
}`}
              language="json"
              id="sample-data"
              title="Sample Todo Document"
            />

            <p className="text-slate-700">
              As you add, modify, or delete items in the frontend, refreshing Compass will reflect the changes in real-time.
            </p>
          </div>
        </Section>

        {/* Command Summary */}
        <Section title="Command Summary" icon={<Terminal className="w-6 h-6" />} id="summary">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Reference</CardTitle>
              <CardDescription>All essential commands in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Command</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Start MongoDB (Windows)</td>
                      <td className="py-3 px-4">
                        <code className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-mono">net start MongoDB</code>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Stop MongoDB</td>
                      <td className="py-3 px-4">
                        <code className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-mono">net stop MongoDB</code>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Start backend</td>
                      <td className="py-3 px-4">
                        <code className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-mono">node server.js</code>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Start frontend</td>
                      <td className="py-3 px-4">
                        <code className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-mono">npm start</code>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Access frontend</td>
                      <td className="py-3 px-4">
                        <a href="http://localhost:3000" className="text-blue-600 hover:underline text-xs font-mono" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">Access backend API</td>
                      <td className="py-3 px-4">
                        <a href="http://localhost:5000/todos" className="text-blue-600 hover:underline text-xs font-mono" target="_blank" rel="noopener noreferrer">http://localhost:5000/todos</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-slate-700">MongoDB Connection</td>
                      <td className="py-3 px-4">
                        <code className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-mono">mongodb://127.0.0.1:27017/todo_demo</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Learning Outcomes */}
        <Section title="Learning Outcomes" icon={<CheckCircle2 className="w-6 h-6" />} id="outcomes">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle2 className="w-5 h-5" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Build a simple full-stack CRUD web application</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Understand how React communicates with a backend via HTTP APIs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Connect an Express backend to MongoDB using Mongoose</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Implement RESTful API endpoints for CRUD operations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Use MongoDB Compass to visualize and manage stored data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm">Master the fundamentals of full-stack development</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Troubleshooting */}
        <Section title="Common Issues & Solutions" icon={<AlertCircle className="w-6 h-6" />} id="troubleshooting">
          <div className="space-y-4">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg text-red-700">MongoDB Connection Error</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-slate-700"><strong>Problem:</strong> "MongoDB connection error" in backend console</p>
                <p className="text-slate-700"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                  <li>Ensure MongoDB service is running (check services.msc)</li>
                  <li>Verify MongoDB is listening on port 27017</li>
                  <li>Check firewall settings aren't blocking the connection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="text-lg text-amber-700">CORS Error</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-slate-700"><strong>Problem:</strong> "CORS policy" error in browser console</p>
                <p className="text-slate-700"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                  <li>Ensure <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">cors</code> package is installed in backend</li>
                  <li>Verify <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">app.use(cors())</code> is in server.js</li>
                  <li>Restart the backend server after adding CORS</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">Port Already in Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-slate-700"><strong>Problem:</strong> "Port 5000 is already in use"</p>
                <p className="text-slate-700"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                  <li>Close any other applications using port 5000</li>
                  <li>Change the PORT variable in server.js to a different port (e.g., 5001)</li>
                  <li>Update the API URL in React's App.js to match</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-slate-200">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to Build?</h3>
                  <p className="text-blue-100">Follow the steps above and create your first full-stack application!</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;