import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const HelpPage: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order from the 'Order History' section in your account. Simply log in and click on your most recent order to view the status.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and digital wallets such as Google Pay and Apple Pay.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Once an order is placed, you can modify it within the first 10 minutes by contacting our support team. After that, the order will be processed and cannot be changed.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're not satisfied with your order, you can request a refund within 24 hours by contacting customer support. Refunds are issued on a case-by-case basis.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "You can apply a discount code during the checkout process in the 'Discount Code' field. Make sure to apply it before completing your payment.",
    },
  ];

  return (
    <section className="ml-[120px] mt-[120px] mr-[120px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Help & FAQs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{faq.question}</h2>
              <p className="text-lg text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpPage;
