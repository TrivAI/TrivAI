import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message } = req.body
    
    if (!name || !email || !message) {
        return res.status(422).json({ message: 'Invalid input.' })
    }
    
    const newFeedback = {
        id: new Date().toISOString(),
        name,
        email,
        message,
    }
    fs.writeFileSync('feedback.json', JSON.stringify(newFeedback));
    console.log(newFeedback)
    
    res.status(201).json({ message: 'success', feedback: newFeedback })
}