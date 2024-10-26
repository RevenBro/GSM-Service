import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const {t} = useTranslation()

  const faqItems = [
    {
      question: 'Lorem ipsum',
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum repellendus maiores veritatis pariatur quis nobis facere, iusto impedit quibusdam?",
    },
    {
      question: 'Lorem ipsum',
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum repellendus maiores veritatis pariatur quis nobis facere, iusto impedit quibusdam?",
    },
    {
      question: 'Lorem ipsum',
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum repellendus maiores veritatis pariatur quis nobis facere, iusto impedit quibusdam?",
    },
    {
      question: 'Lorem ipsum',
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum repellendus maiores veritatis pariatur quis nobis facere, iusto impedit quibusdam?",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-teal-400 pl-4">{t("oftenQuestions")}</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-teal-400">
            <button className="w-full flex justify-between items-center py-4 text-lg font-medium hover:text-teal-400 transition" onClick={() => toggleAccordion(index)}>
              {item.question}
              {activeIndex === index ? (
                <FiChevronUp className="text-teal-400" />
              ) : (
                <FiChevronDown className="text-teal-400" />
              )}
            </button>
            {activeIndex === index && (
              <div className="text-gray-300 px-4 pb-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
