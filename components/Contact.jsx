import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact Me</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Message</label>
            <Textarea 
              id="message" 
              placeholder="Your message" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
          
          {status === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </div>
      </form>
    </section>
  )
}