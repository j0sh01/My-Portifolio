import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EducationTimeline from '../components/School';
import Carousel from '../components/Carousel';
import { Input } from "@/components/ui/input";

export default function Private() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/private')
      .then(response => response.json())
      .then(data => {
        setContacts(Array.isArray(data) ? data : []);
        setFilteredContacts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.message.toLowerCase().includes(query)
    );

    setFilteredContacts(filtered);
  };

  if (loading) {
    return <div className="container py-12">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Admin Page - Contact Messages</title>
      </Head>
      <Header />
      <main className="container py-12">
        <Hero />
        <Carousel />
        <EducationTimeline />
        <Projects />
        <Skills />
        <Contact />
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact Messages</h2>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search by name, email, or message..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border rounded"
          />
        </div>
        {filteredContacts.length === 0 ? (
          <p>No contact messages available.</p>
        ) : (
          <ul className="space-y-4">
            {filteredContacts.map(contact => (
              <li key={contact.date} className="border p-4 rounded shadow">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <p><strong>Date:</strong> {new Date(contact.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
