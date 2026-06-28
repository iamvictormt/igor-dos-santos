'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Youtube, Music, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'show',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar mensagem.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', type: 'show', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar mensagem.');
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/0homems0',
      handle: '@0homems0',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@igordossantos',
      handle: '@igordossantos',
    },
    {
      icon: Music,
      label: 'Spotify',
      href: 'https://open.spotify.com/artist/0homems0',
      handle: '0homems0',
    },
  ];

  const platforms = [
    { name: 'Spotify', href: 'https://open.spotify.com/artist/0homems0' },
    { name: 'Deezer', href: 'https://deezer.com/artist/ohomems0' },
    { name: 'Amazon Music', href: 'https://music.amazon.com/artists/ohomems0' },
    { name: 'Apple Music', href: 'https://music.apple.com/artist/ohomems0' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <div className="mb-12 md:mb-16">
            <span className="section-number hidden md:block">01</span>
            <span className="editorial-tag mb-4 inline-block">Contato</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mt-3">
              Vamos <span className="italic">Conversar</span>
            </h1>
            <p className="font-serif italic text-lg text-muted-foreground mt-3 max-w-2xl">
              Para shows, colaborações ou apenas um olá.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Form — left 7 cols */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="border border-[#C41E3A] p-8 md:p-12 text-center">
                  <p className="font-serif italic text-2xl text-[#C41E3A]">
                    Mensagem enviada!
                  </p>
                  <p className="font-sans text-muted-foreground mt-2">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-transparent border-b border-border focus:border-[#C41E3A] py-3 font-serif text-lg outline-none transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-transparent border-b border-border focus:border-[#C41E3A] py-3 font-serif text-lg outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
                      Assunto
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 'show', label: 'Contratar para show' },
                        { value: 'collab', label: 'Colaboração' },
                        { value: 'press', label: 'Imprensa' },
                        { value: 'fan', label: 'Mensagem de fã' },
                      ].map(option => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, type: option.value }))}
                          className={`px-4 py-2 font-sans text-sm border transition-all duration-200 ${
                            formData.type === option.value
                              ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                              : 'border-border text-foreground hover:border-[#C41E3A]'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-transparent border-b border-border focus:border-[#C41E3A] py-3 font-serif text-lg outline-none transition-colors resize-none"
                      placeholder="Escreva sua mensagem..."
                    />
                  </div>

                  {error && (
                    <div className="border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-400 font-sans">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#C41E3A] text-white font-serif text-lg tracking-wide px-8 py-4 hover:bg-[#A01830] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar info — right 5 cols */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Contact info */}
              <div className="border-t border-border pt-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  Informações
                </h3>
                <div className="space-y-4">
                  <a href="mailto:contato@ohomemso.com.br" className="flex items-center gap-3 group">
                    <Mail className="h-5 w-5 text-[#C41E3A]" />
                    <span className="font-serif text-lg text-foreground group-hover:text-[#C41E3A] transition-colors">
                      contato@ohomemso.com.br
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#C41E3A]" />
                    <span className="font-serif text-lg text-foreground">
                      +55 11 99999-9999
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#C41E3A]" />
                    <span className="font-serif text-lg text-foreground">
                      São Paulo, SP — Brasil
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="border-t border-border pt-8 mt-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  Redes Sociais
                </h3>
                <div className="space-y-3">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <link.icon className="h-5 w-5 text-foreground group-hover:text-[#C41E3A] transition-colors" />
                      <span className="font-serif text-lg text-foreground group-hover:text-[#C41E3A] transition-colors">
                        {link.handle}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Streaming platforms */}
              <div className="border-t border-border pt-8 mt-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  Ouvir no Streaming
                </h3>
                <div className="space-y-2">
                  {platforms.map(platform => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-border hover:border-[#C41E3A] group transition-colors"
                    >
                      <span className="font-serif text-foreground group-hover:text-[#C41E3A] transition-colors">
                        {platform.name}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-[#C41E3A] transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
