import { useState } from "react";
import "./faqs.css";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqsData = [
    {
      question: "What types of courses does Dexter Learning offer?",
      answer:
        "Dexter Learning offers a variety of courses in fields such as data science, web development, and digital marketing.",
    },
    {
      question: "Are the courses beginner-friendly?",
      answer:
        "Yes, many of our courses are designed for beginners and include step-by-step instructions.",
    },
    {
      question: "Can I switch between video and text formats?",
      answer:
        "Yes, you can choose between video and text formats for most of our courses.",
    },
    {
      question: "Can I access mentorship or internships through these courses?",
      answer:
        "Yes, we offer mentorship and internship opportunities for select courses.",
    },
    {
      question:
        "Do I need to pay any fee after completing the exam for registration?",
      answer: "No, there are no additional fees after completing the exam.",
    },
    {
      question: "Are there any discounts available for students?",
      answer:
        "Yes, we offer discounts for students. Please check our website for current offers.",
    },
    {
      question: "How many mock interviews can I take per week on the platform?",
      answer: "You can take up to 3 mock interviews per week on our platform.",
    },
  ];

  return (
    <div className="faqs">
      <h2 className="faqs-heading">FAQs & Help</h2>
      <ul className="faqs-list">
        {faqsData.map((faq, index) => (
          <li
            key={index}
            className="faqs-item"
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              {index + 1}. {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
      <div className="see-more">
        <a href="#">See More</a>
      </div>
    </div>
  );
}

export default Faqs;
