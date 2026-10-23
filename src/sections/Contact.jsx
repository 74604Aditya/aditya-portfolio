
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiXCircle,
  FiX,
} from "react-icons/fi";
import "./Contact.css";

const CONTACT_EMAIL = "aditya14.lande@gmail.com";

const contactSocials = [
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/74604Aditya",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/adityablande14/",
    icon: <FiLinkedin />,
  },
];

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setModal((previous) => ({
      ...previous,
      show: false,
    }));
  };

  // Close the modal using Escape and prevent background scrolling.
  useEffect(() => {
    if (!modal.show) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal.show]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setModal({
        show: true,
        type: "error",
        title: "Configuration Missing",
        message: `The email service is not configured correctly. Please try again later or email me directly at ${CONTACT_EMAIL}.`,
      });
      return;
    }

    const trimmedData = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      to_email: CONTACT_EMAIL,
    };

    if (
      !trimmedData.from_name ||
      !trimmedData.from_email ||
      !trimmedData.subject ||
      !trimmedData.message
    ) {
      setModal({
        show: true,
        type: "error",
        title: "Missing Information",
        message: "Please complete all fields before sending your message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        trimmedData,
        { publicKey }
      );

      setFormData({ ...INITIAL_FORM_DATA });

      setModal({
        show: true,
        type: "success",
        title: "Message Sent Successfully!",
        message:
          "Thank you for reaching out! Your message has been sent. I'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setModal({
        show: true,
        type: "error",
        title: "Message Could Not Be Sent",
        message: `We couldn't send your message right now. Please try again or email me directly at ${CONTACT_EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="portfolio-contact-section">
      <div className="container portfolio-contact-container">
        <header className="portfolio-contact-heading">
          <span className="portfolio-contact-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Something <span>Meaningful</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </header>

        <div className="row g-4 portfolio-contact-layout">
          <div className="col-lg-5">
            <div className="portfolio-contact-info">
              <span className="portfolio-contact-kicker">
                CONTACT INFORMATION
              </span>

              <h3>Let's start a conversation.</h3>

              <p className="portfolio-contact-description">
                I'm interested in Java development, full-stack
                engineering, modern web applications, and
                opportunities to solve real-world problems.
              </p>

              <a
                className="portfolio-contact-detail"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="portfolio-contact-icon">
                  <FiMail />
                </span>

                <span className="portfolio-contact-detail-text">
                  <small>Email</small>
                  <strong>{CONTACT_EMAIL}</strong>
                </span>

                <FiArrowUpRight className="portfolio-contact-arrow" />
              </a>

              <div className="portfolio-contact-detail">
                <span className="portfolio-contact-icon">
                  <FiMapPin />
                </span>

                <span className="portfolio-contact-detail-text">
                  <small>Location</small>
                  <strong>Pune, Maharashtra, India</strong>
                </span>
              </div>

              <div className="portfolio-contact-socials">
                <h4>Find me online</h4>

                {contactSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-contact-social"
                    aria-label={`${social.label}: ${social.value}`}
                  >
                    <span className="portfolio-contact-social-icon">
                      {social.icon}
                    </span>

                    <span>
                      <strong>{social.label}</strong>
                      <small>{social.value}</small>
                    </span>

                    <FiArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <br />

          <div className="col-lg-7">
            <form
              className="portfolio-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="portfolio-contact-form-heading">
                <span className="portfolio-contact-form-icon">
                  <FiSend />
                </span>

                <div>
                  <h3>Send me a message</h3>
                  <p>Fill in the details below to get in touch.</p>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    className="portfolio-contact-label"
                    htmlFor="contact-name"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    className="portfolio-contact-input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label
                    className="portfolio-contact-label"
                    htmlFor="contact-email"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    className="portfolio-contact-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    className="portfolio-contact-label"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    className="portfolio-contact-input"
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={150}
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    className="portfolio-contact-label"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    className="portfolio-contact-input portfolio-contact-textarea"
                    name="message"
                    placeholder="Tell me a little about your idea..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={5000}
                    required
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="portfolio-contact-submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    <span>
                      {isSubmitting
                        ? "Sending Message..."
                        : "Send Message"}
                    </span>

                    <FiSend />
                  </button>

                  <p className="portfolio-contact-form-note">
                    <FiCheckCircle />
                    Your message will be sent directly to my email.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="portfolio-contact-bottom">
          <span>Have a great idea? Let's talk.</span>
          <span>Designed &amp; built with React</span>
        </div>
      </div>

      {modal.show &&
        createPortal(
          <div
            className="portfolio-contact-modal-overlay"
            onClick={closeModal}
          >
            <div
              className="portfolio-contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-contact-modal-title"
              aria-describedby="portfolio-contact-modal-message"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-contact-modal-close"
                onClick={closeModal}
                aria-label="Close popup"
                autoFocus
              >
                <FiX />
              </button>

              <div
                className={`portfolio-contact-modal-icon ${
                  modal.type === "success"
                    ? "is-success"
                    : "is-error"
                }`}
              >
                {modal.type === "success" ? (
                  <FiCheckCircle />
                ) : (
                  <FiXCircle />
                )}
              </div>

              <h3 id="portfolio-contact-modal-title">
                {modal.title}
              </h3>

              <p id="portfolio-contact-modal-message">
                {modal.message}
              </p>

              <button
                type="button"
                className="portfolio-contact-modal-button"
                onClick={closeModal}
              >
                {modal.type === "success" ? "Great, thanks!" : "Close"}
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Contact;
