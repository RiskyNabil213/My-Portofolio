'use client';

import { useState } from 'react';
import { socialLinks } from '@/lib/constants';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phone = '6285790519397';
    const text = `Halo, saya *${formData.name}*\nEmail: ${formData.email}\nSubjek: ${formData.subject}\n\n${formData.message}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tertarik bekerja sama? Jangan ragu untuk menghubungi saya untuk diskusi tentang proyek atau peluang magang.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Kirim Pesan</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-6 text-center">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500 mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-green-800 mb-1 md:mb-2">Pesan Terkirim!</h4>
                <p className="text-green-600 text-sm md:text-base">
                  Terima kasih telah menghubungi. Saya akan membalas pesan Anda segera.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300 text-sm md:text-base"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300 text-sm md:text-base"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300 text-sm md:text-base"
                    placeholder="Apa yang ingin Anda diskusikan?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300 resize-none text-sm md:text-base"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg md:hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Informasi Kontak</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">Email</h4>
                      <a href="mailto:nabilrisky390@gmail.com" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base break-all">
                        nabilrisky390@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">Telepon</h4>
                      <a href="tel:+6285790519397" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base">
                        +62 857 9051 9397
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">Lokasi</h4>
                      <p className="text-blue-100 text-sm md:text-base">Malang, Jawa Timur</p>
                      <p className="text-xs md:text-sm text-blue-200">SMK Telkom Malang</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Bersedia Untuk</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-blue-50 rounded-xl gap-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">Magang</h4>
                      <p className="text-xs md:text-sm text-gray-600">Frontend Developer</p>
                    </div>
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium self-start sm:self-center">
                      Available
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-purple-50 rounded-xl gap-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">Freelance</h4>
                      <p className="text-xs md:text-sm text-gray-600">Web Development</p>
                    </div>
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium self-start sm:self-center">
                      Available
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl gap-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">Kolaborasi</h4>
                      <p className="text-xs md:text-sm text-gray-600">Open Source</p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium self-start sm:self-center">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;