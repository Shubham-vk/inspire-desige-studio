"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your form submission logic here
    setSubmitted(true);

    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section id="contact-form" className="px-6 py-16">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-8 text-3xl font-medium text-center">
          Send Your Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-neutral-200 p-6 md:p-8"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 outline-none transition focus:border-neutral-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 outline-none transition focus:border-neutral-900"
              />
            </div>
          </div>

          {/* Phone + Project Type */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Phone / WhatsApp
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 outline-none transition focus:border-neutral-900"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium"
              >
                Project Type
              </label>

              <select
                id="projectType"
                name="projectType"
                required
                defaultValue=""
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 outline-none focus:border-neutral-900"
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="office">Office</option>
                <option value="hospitality">Hospitality</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Tell us about your project
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Briefly describe your project..."
              required
              className="w-full resize-none border-b border-neutral-300 bg-transparent px-0 py-3 outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Send Enquiry
          </button>

          {submitted && (
            <p className="text-center text-sm text-green-600">
              Thanks! We’ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
