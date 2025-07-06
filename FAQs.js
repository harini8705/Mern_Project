import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: "How to sign up?", answer: "You can sign up by clicking the Signup page and filling the form." },
    { question: "How is the payment processed?", answer: "Payments are securely processed via our payment gateway after registration." },
    { question: "What classes are available?", answer: "We offer Ballet, Hip-Hop, Contemporary, and more." },
    { question: "Can I cancel my class?", answer: "Yes, cancellations can be made up to 24 hours before the class." },
    { question: "Do you offer trial classes?", answer: "Yes, trial classes are available for new students." },
  ]);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });

      if (response.ok) {
        setFaqs([...faqs, { question, answer }]);
        setQuestion("");
        setAnswer("");
        setSuccessMsg("Your question has been submitted and added to the FAQ.");
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        alert("Failed to submit your question. Please try again.");
      }
    } catch (err) {
      console.error("Error adding FAQ:", err);
      alert("Error submitting your question.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#f7f7f7" }}>
      <main className="container flex-grow-1 py-5">
        <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>

        <div className="accordion mb-5" id="faqAccordion">
          {faqs.map((faq, index) => {
            const collapseId = `collapse-${index}`;
            const headingId = `heading-${index}`;
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false"
                    aria-controls={collapseId}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className="accordion-collapse collapse"
                  aria-labelledby={headingId}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <h4 className="mb-3">Ask a Question</h4>

          {successMsg && (
            <div className="alert alert-success" role="alert">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter the answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                rows={3}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit Question
            </button>
          </form>
        </div>
      </main>

      <footer
        className="text-center py-3 mt-auto"
        style={{ backgroundColor: "#e9ecef", color: "#212529" }}
      >
        &copy; {new Date().getFullYear()} DancePulse Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default FAQ;
