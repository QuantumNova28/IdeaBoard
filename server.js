const express = require('express');
const port = 5000;
const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsetter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '19-07-2024',
  },
  {
    id: 2,
    text: 'My client should go right to fucking jail.',
    tag: 'Movies',
    username: 'AlPacino',
    date: '9-07-2024',
  },
  {
    id: 3,
    text: 'You are out of order, whole courtrooms out of order',
    tag: 'Television',
    username: 'RoberDeNiro',
    date: '21-07-3020',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ message: 'Welcome to IdeaBoard API' });
});

// Individual ids
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
