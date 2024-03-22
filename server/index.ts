import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const apiKey: any | undefined = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error('OpenAI API key is not provided.');
}

app.post('/completions', async (req: any, res: any) => {

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: `Create a SQL request to ${req.body.message}. Just give me the code.`
                }
            ],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch('\n' + 'https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
    }
});




const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

