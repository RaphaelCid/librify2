"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Flowbite?",
    answer: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    question: "Is there a Figma file available?",
    answer: "Flowbite is first conceptualized and designed using the Figma software.",
  },
  {
    question: "What are the differences between Flowbite and Tailwind UI?",
    answer: "The main difference is that the core components from Flowbite are open source under the MIT license.",
  },
];

// Cambio de nombre del componente a Faqs y ajuste del formato
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6 ">
        <img
          src="../../static/img/logogandalf.png" // Asegúrate de que la ruta sea correcta
          alt="Logo de la biblioteca"
          className="max-h-12"
        />
        <h1 className="ml-4 text-3xl font-bold">Preguntas Frecuentes</h1>
      </div>

      <main className="flex ">
        <div className="flex-1 p-4">
          <div className="overflow-auto">
            <div className="min-h-screen flex flex-col ">
              <div className="container mx-auto ">
                <div className="bg-gray-100 p-4 rounded-lg shadow dark:bg-[#232323]">
                  {faqs.map((faq, index) => (
                    <div key={index} className="flex m-5 flex-col border-b border-gray-200">
              
                        <button
                          type="button"
                          className="font-semibold dark:text-white block font-medium flex items-center justify-between w-full rounded-lg py-5"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openIndex === index}
                          aria-controls={`accordion-flush-body-${index}`}
                        >
                          <span>{faq.question}</span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                              }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                  
                      <div
                        id={`accordion-flush-body-${index}`}
                        className={`${openIndex === index ? "" : "hidden"}`}
                        aria-labelledby={`accordion-flush-heading-${index}`}
                      >
                        <div className="py-5 text-gray-500">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
