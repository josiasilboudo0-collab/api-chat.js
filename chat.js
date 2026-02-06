import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) { if (req.method !== 'POST') return res.status(405).json({ error: 'Interdit' }); const genAI = new GoogleGenerativeAI("AIzaSyAZKlxeUjqOdum0dcmJyQrJdD0AcBgSeP4"); const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); try { const { prompt } = req.body; const result = await model.generateContent(prompt); const response = await result.response; res.status(200).json({ text: response.text() }); } catch (error) { res.status(500).json({ error: "Erreur" }); }
