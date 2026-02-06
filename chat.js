import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) { const genAI = new GoogleGenerativeAI("AIzaSyAZKlxeUjqOdum0dcmJyQrJdD0AcBgSeP4"); const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); try { const result = await model.generateContent(req.body.prompt); res.status(200).json({ text: result.response.text() }); } catch (error) { res.status(500).json({ error: "Erreur" }); } }
