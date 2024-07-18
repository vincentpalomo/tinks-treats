import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbyo6AT7zZkQhcPe4UH32D8i5ZyEew_IKvaGdtM05RyeLJz4sZo1ShvLk1ggAsE5FbVeFQ/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Form Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-green-100 text-green-700 font-medium rounded-md font-geistmono tracking-widest mb-[200px]">
        Thank you for reaching out! We&apos;ll get back to you soon. 🙂
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full sm:w-[400px] lowercase 2xl:w-[600px] font-geistmono tracking-widest text-darkbrown"
    >
      <div className="mb-4 sm:mb-1">
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-2xl bg-transparent placeholder-gray-500"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-2xl bg-transparent placeholder-gray-500"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="phone" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-2xl bg-transparent placeholder-gray-500"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-2xl bg-transparent placeholder-gray-500"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full sm:w-[100px] px-4 py-2 font-bold border-2 border-teal text-teal rounded-xl hover:bg-teal hover:text-white sm:mt-2"
      >
        submit
      </button>
    </form>
  );
}
