const express = require('express');
const router = express.Router();

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

// GET Requests
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to IdeaBoard API', data : ideas });
});

// Individual ids
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

// PUT Request

router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// POST Request

router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toLocaleDateString().slice(0, 10),
  };

  ideas.push = idea;
  res.json({ success: true, data: idea });
});

// DELETE Request

router.delete('/:id', (req, res) => {
  const idea = ideas.findIndex((idea) => idea.id === +req.params.id);
  if (idea !== -1) {
    ideas.splice(idea, 1);
  }
  res.json({ success: 'True', data : ideas });
});

module.exports = router;
