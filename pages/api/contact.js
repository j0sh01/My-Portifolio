// pages/api/contact.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    const date = new Date().toISOString();
    const contactData = {
      name,
      email,
      message,
      date,
    };

    // Path to store contact messages
    const filePath = path.join(process.cwd(), 'src', 'data', 'contacts.json');
    
    // Read existing contacts or create new array
    let contacts = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      contacts = JSON.parse(fileData);
    }

    // Add new contact
    contacts.push(contactData);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
}