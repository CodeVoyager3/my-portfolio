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
    <div className="py-16 flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] text-center'>
        CONTACT ME
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-7 mb-12 lg:mb-0">
            {/* Wooden Sign Container */}
            <div className="bg-[#5d4037] p-8 rounded-sm border-4 border-[#3e2723] shadow-2xl relative">
              <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-[#8d6e63] pointer-events-none"></div>

              <h2 className="text-3xl font-bold mb-6 text-[#f4e4bc] drop-shadow-md text-center">
                Send a Message
              </h2>
              <p className="mb-6 text-[#d7ccc8] text-center">
                Have a project idea or a question? I'd love to hear from you.
              </p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#f4e4bc]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#3e2723] border-2 border-[#8d6e63] text-[#f4e4bc] placeholder-[#8d6e63] focus:outline-none focus:border-[#f4e4bc] transition-colors font-minecraft"
                    placeholder="Steve"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#f4e4bc]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#3e2723] border-2 border-[#8d6e63] text-[#f4e4bc] placeholder-[#8d6e63] focus:outline-none focus:border-[#f4e4bc] transition-colors font-minecraft"
                    placeholder="steve@minecraft.net"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#f4e4bc]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#3e2723] border-2 border-[#8d6e63] text-[#f4e4bc] placeholder-[#8d6e63] focus:outline-none focus:border-[#f4e4bc] transition-colors resize-none font-minecraft"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#7cb342] hover:bg-[#689f38] text-white py-3 border-b-4 border-[#33691e] active:border-b-0 active:translate-y-1 transition-all font-bold text-xl shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:pt-8">
            <h3 className="text-3xl font-bold mb-6 lg:mb-8 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
              My Socials <FontAwesomeIcon icon={faTurnDown} className="text-[#ffff55] ml-2" />
            </h3>

            <div className="space-y-6 w-full max-w-sm lg:max-w-none">
              {[
                { href: "https://github.com/CodeVoyager3", icon: Github, label: "GitHub", color: "text-white" },
                { href: "https://www.linkedin.com/in/amritesh-kumar-rai/", icon: Linkedin, label: "LinkedIn", color: "text-blue-300" },
                { href: "https://x.com/Amritesh37151", icon: Twitter, label: "Twitter / X", color: "text-blue-200" },
                { href: "mailto:amriteshkumarrai14@gmail.com", icon: Mail, label: "Email", color: "text-red-300" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#8b8b8b] border-2 border-white border-b-4 border-r-4 border-b-[#373737] border-r-[#373737] hover:bg-[#a0a0a0] active:border-b-2 active:border-r-2 active:translate-y-[2px] transition-none group"
                >
                  <social.icon size={28} className={`${social.color} filter drop-shadow-sm`} />
                  <span className="ml-4 font-semibold text-lg text-white drop-shadow-md">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect