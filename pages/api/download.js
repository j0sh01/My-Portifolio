import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'files', 'JOSHUA JOSEPH MICHAEL - CV UPDATED.pdf');
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="JOSHUA-JOSEPH-MICHAEL-CV.pdf"');
    res.send(fileBuffer);
  } catch {
    res.status(500).json({ error: 'Failed to download CV' });
  }
}