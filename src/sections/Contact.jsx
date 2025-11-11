import React, { useState } from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTurnDown } from '@fortawesome/free-solid-svg-icons'

function Connect() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      await fetch('https://formspree.io/f/xpwyypvz', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className=" p-8 rounded-2xl shadow-2xl border ">
              <h2 className="text-3xl font-bold  mb-6">
                Send Me a Message
              </h2>
              <p className=" mb-6 opacity-80">
                Have a project idea or a question? I'd love to hear from you.
              </p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border  rounded-lg   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium  mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:pt-8">
            <h3 className="text-3xl font-bold mb-6 lg:mb-8">
              My Socials <FontAwesomeIcon icon={faTurnDown} className="text-blue-500 ml-2" />
            </h3>

            <div className="space-y-6 w-full max-w-sm lg:max-w-none">
              <a
                href="https://github.com/CodeVoyager3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4  rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-400 transition-all group border "
              >
                <Github size={28} className=" group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
                <span className="ml-4 font-semibold text-lg ">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/amritesh-kumar-rai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4  rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-400 transition-all group border "
              >
                <Linkedin size={28} className="text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                <span className="ml-4 font-semibold text-lg ">LinkedIn</span>
              </a>
              
              <a
                href="https://x.com/Amritesh37151"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4  rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-400 transition-all group border "
              >
                <Twitter size={28} className=" group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
                <span className="ml-4 font-semibold text-lg ">Twitter / X</span>
              </a>

              <a
                href="mailto:amriteshkumarrai14@gmail.com"
                className="flex items-center p-4  rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-400 transition-all group border "
              >
                <Mail size={28} className="text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors" />
                <span className="ml-4 font-semibold text-lg ">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect