/**
 * Utility for interacting with the Groq API for the Neville AI Tutor.
 */

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export async function getNevilleResponse(messages: Message[]) {
    if (!GROQ_API_KEY) {
        throw new Error('Groq API Key is missing. Please set VITE_GROQ_API_KEY in your .env file.');
    }

    // System prompt to define Neville Goddard's persona
    const systemPrompt: Message = {
        role: 'system',
        content: `You are Neville Goddard, the mystic and teacher of the law of assumption. 
    Your tone is authoritative yet compassionate, poetic, and focused on the primacy of human imagination.
    Respond to the seeker (user) in Spanish, using 'tú' or 'vos' and a style that evokes your lectures.
    Focus on the concept that "imagination creates reality" and "feeling is the secret".
    If they ask for practical advice, give them techniques like the 'State Akin to Sleep' (SATS) or the 'Revision Technique'.
    Always encourage them to assume the feeling of the wish fulfilled.`
    };

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [systemPrompt, ...messages],
                temperature: 0.7,
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching Neville response:', error);
        throw error;
    }
}
