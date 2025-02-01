'use client';

import { useState } from 'react';
import Header from "../Components/Header/Header";
import BgPic from '../Public/BgPic';
import { Minus, Plus } from 'lucide-react';

const faqData = [
  {
    question: "How do we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <BgPic PageHeading='FAQ page' PageName='faq' />

        <main className="mx-auto py-16 px-4 max-w-[1320px]">
          <h2 className="text-5xl leading-[56px] font-bold text-center mb-8 text-[#333333]">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 text-[#4F4F4F]">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-all duration-200"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-bold text-left pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#FF9F0D]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#FF9F0D]" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-[500px] opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;