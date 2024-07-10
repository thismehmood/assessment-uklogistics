// 'use client';
import {postRequest} from '@/utils/requests';
import {useState} from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    address: '',
    query: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequest({
        endpoint: '/submit-contact-form',
        payload: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("contact form data: :", response);

      const data = response.data;
      if (response.status === 200) {
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({name: '', phoneNo: '', address: '', query: ''});
      } else {
        throw new Error(data.message || 'Error submitting form');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We're here to help and answer any question you might have. We look
          forward to hearing from you 🙂
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Contact Us
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700"
            >
              Query
            </label>
            <textarea
              name="query"
              id="query"
              value={formData.query}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
