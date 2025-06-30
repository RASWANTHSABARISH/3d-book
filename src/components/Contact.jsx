import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
    // You can plug in EmailJS or any API here later.
  };

  return (
    <section className="bg-black text-white py-20 px-6" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-zinc-800 p-3 rounded text-white border border-zinc-600 focus:outline-none focus:border-red-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-zinc-800 p-3 rounded text-white border border-zinc-600 focus:outline-none focus:border-red-500"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="bg-zinc-800 p-3 rounded text-white border border-zinc-600 focus:outline-none focus:border-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-colors py-2 rounded font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};