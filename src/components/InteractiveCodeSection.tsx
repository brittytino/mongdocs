import { CodePlayground } from "./CodePlayground";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Server, Code, Database, Copy, RotateCcw } from "lucide-react";

const BACKEND_EXAMPLE = `// Express.js - Complete Todo API
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://user:pass@cluster.mongodb.net/todo_demo';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error('✗ Connection error:', err));

// Todo Schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes

// GET all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// POST new todo
app.post('/todos', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) {
      return res.status(400).json({ error: 'Text required' });
    }
    const todo = await Todo.create({ text: text.trim() });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

// PUT update todo
app.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: 'Not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update' });
  }
});

// DELETE todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));`;

const FRONTEND_EXAMPLE = `// React Todo Component with Hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    setLoading(true);
    try {
      const res = await axios.get(\`\${API}/todos\`);
      setTodos(res.data);
    } catch (err) {
      console.error('Failed to fetch:', err);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    
    try {
      await axios.post(\`\${API}/todos\`, { text });
      setText('');
      fetchTodos();
    } catch (err) {
      console.error('Failed to add:', err);
    }
  }

  async function toggleTodo(id, done) {
    try {
      await axios.put(\`\${API}/todos/\${id}\`, { done: !done });
      fetchTodos();
    } catch (err) {
      console.error('Failed to toggle:', err);
    }
  }

  async function deleteTodo(id) {
    if (!window.confirm('Delete this todo?')) return;
    
    try {
      await axios.delete(\`\${API}/todos/\${id}\`);
      fetchTodos();
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>My Todos</h1>
      
      <form onSubmit={addTodo} style={{ marginBottom: 20 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo..."
          style={{ padding: 10, width: '70%' }}
        />
        <button type="submit" style={{ padding: 10, marginLeft: 8 }}>
          Add
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo._id} style={{ 
              padding: 10, 
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center'
            }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo._id, todo.done)}
              />
              <span style={{ 
                flex: 1, 
                marginLeft: 10,
                textDecoration: todo.done ? 'line-through' : 'none'
              }}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;`;

const MONGOOSE_EXAMPLE = `// MongoDB Schema and Model Definition
const mongoose = require('mongoose');

// Define the schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Todo text is required'],
    trim: true,
    minlength: [1, 'Text must be at least 1 character'],
    maxlength: [500, 'Text cannot exceed 500 characters']
  },
  done: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: {
    type: Date,
    validate: {
      validator: function(value) {
        return !value || value > new Date();
      },
      message: 'Due date must be in the future'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt
});

// Add instance methods
todoSchema.methods.toggleDone = function() {
  this.done = !this.done;
  return this.save();
};

// Add static methods
todoSchema.statics.findByPriority = function(priority) {
  return this.find({ priority, done: false });
};

// Add indexes for better query performance
todoSchema.index({ done: 1, createdAt: -1 });
todoSchema.index({ priority: 1 });

// Add pre-save middleware
todoSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Virtual property
todoSchema.virtual('isOverdue').get(function() {
  return this.dueDate && this.dueDate < new Date() && !this.done;
});

// Configure toJSON to include virtuals
todoSchema.set('toJSON', { virtuals: true });

// Create and export the model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

// Example usage:
// const todo = new Todo({ text: 'Learn MongoDB', priority: 'high' });
// await todo.save();
// const highPriorityTodos = await Todo.findByPriority('high');`;

export const InteractiveCodeSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Interactive Code Playground</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore, edit, and experiment with the complete code examples. Copy any snippet
          and use it in your own project.
        </p>
      </div>

      <Tabs defaultValue="backend" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
          <TabsTrigger value="backend" className="flex flex-col sm:flex-row items-center gap-2 py-3">
            <Server className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Backend</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Express API</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="frontend" className="flex flex-col sm:flex-row items-center gap-2 py-3">
            <Code className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Frontend</div>
              <div className="text-xs text-muted-foreground hidden sm:block">React App</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="database" className="flex flex-col sm:flex-row items-center gap-2 py-3">
            <Database className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Database</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Mongoose Schema</div>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="backend" className="mt-6 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start gap-3">
              <Server className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Express.js Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Complete RESTful API with CRUD operations. This example includes MongoDB
                  connection, schema definition, and all four HTTP methods (GET, POST, PUT,
                  DELETE). Try modifying the routes or adding new endpoints.
                </p>
              </div>
            </div>
          </Card>
          <CodePlayground
            title="server.js - Complete Backend"
            initialCode={BACKEND_EXAMPLE}
            language="javascript"
            height="600px"
          />
        </TabsContent>

        <TabsContent value="frontend" className="mt-6 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-info/5 to-info/10 border-info/20">
            <div className="flex items-start gap-3">
              <Code className="w-6 h-6 text-info mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">React Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  Full React component with hooks for state management. Includes todo list
                  rendering, form handling, and async API calls with Axios. Experiment with
                  adding new features like filtering or search.
                </p>
              </div>
            </div>
          </Card>
          <CodePlayground
            title="App.js - React Todo Component"
            initialCode={FRONTEND_EXAMPLE}
            language="javascript"
            height="600px"
          />
        </TabsContent>

        <TabsContent value="database" className="mt-6 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <div className="flex items-start gap-3">
              <Database className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Mongoose Schema & Model</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced schema definition with validation, indexes, middleware, and virtual
                  properties. Learn how to structure your MongoDB data with proper constraints
                  and methods.
                </p>
              </div>
            </div>
          </Card>
          <CodePlayground
            title="Todo.model.js - Database Schema"
            initialCode={MONGOOSE_EXAMPLE}
            language="javascript"
            height="600px"
          />
        </TabsContent>
      </Tabs>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Card className="p-4 border-primary/30 bg-primary/5">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Copy className="w-4 h-4 text-primary" />
            Easy Copy
          </h4>
          <p className="text-sm text-muted-foreground">
            Click the Copy button to instantly copy code to your clipboard
          </p>
        </Card>
        <Card className="p-4 border-info/30 bg-info/5">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4 text-info" />
            Live Editing
          </h4>
          <p className="text-sm text-muted-foreground">
            Modify the code directly in the editor to see how it works
          </p>
        </Card>
        <Card className="p-4 border-success/30 bg-success/5">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-success" />
            Reset Anytime
          </h4>
          <p className="text-sm text-muted-foreground">
            Use the Reset button to restore the original code
          </p>
        </Card>
      </div>
    </div>
  );
};
