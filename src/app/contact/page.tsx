'use client';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Have a question or need assistance? We're here to help!</p>
      <form className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full p-3 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-deep-jungle-green" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full p-3 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-deep-jungle-green" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea id="message" rows={5} className="w-full p-3 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-deep-jungle-green"></textarea>
        </div>
        <button type="submit" className="bg-deep-jungle-green text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
