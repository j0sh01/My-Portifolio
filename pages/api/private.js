import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'contacts.json');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const contacts = JSON.parse(fileContents);
    
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read contacts' });
  }
}
