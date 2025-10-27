const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/ai-answer', async (req, res) => {
  try {
    const { question, qaList } = req.body;
    const dbString = qaList.map(q => `Q: ${q.q}\nA: ${q.a}`).join('\n');
    const prompt = `Refer to the following museum guide Q&A database:\n${dbString}\n\nUser's Question: ${question}\n\nIf the user's question matches any question above (even if paraphrased), reproduce the closest matching answer. If not, answer as best you can about the exhibit.`;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0,
    });

    const answer = chatCompletion.choices[0].message.content.trim();
    res.json({ answer });

  } catch (err) {
    console.log(err);
    res.status(500).json({ answer: "AI backend error. Please try later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Museum AI server running on port ${PORT}`));
