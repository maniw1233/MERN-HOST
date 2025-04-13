import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <ContactForm />
        {/* You can add other contact page sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;