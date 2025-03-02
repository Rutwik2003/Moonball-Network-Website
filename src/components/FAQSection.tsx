import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What's the server IP?",
    answer: "Our server IP is mc.rutwikdev.com:6007. Simply copy it and paste it into your Minecraft multiplayer server list to join!"
  },
  {
    question: "Do I need mods to join?",
    answer: "No, you don't need any mods to join our server! We're a vanilla-friendly server that uses plugins for enhanced features, but you can join with a standard Minecraft client."
  },
  {
    question: "What Minecraft versions are supported?",
    answer: "We support Minecraft Java Edition version 1.20.x. Make sure your client is updated to the latest version to join."
  },
  {
    question: "How do I get started?",
    answer: "After joining, you'll spawn in our welcome area. Read the information boards, use /help for commands, and ask in chat if you need assistance. Staff and veteran players are always happy to help!"
  },
  {
    question: "How do I earn money?",
    answer: "You can earn money through various activities: selling items to the server shop, completing jobs, participating in events, and trading with other players."
  },
  {
    question: "Is PvP enabled?",
    answer: "PvP is only enabled in designated areas and during specific events. The main world is focused on peaceful building and collaboration."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-md"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}