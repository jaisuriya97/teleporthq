import React from "react";

function ContactUs() {
  const cardData = [
    {
      icon: "bi bi-envelope-fill",
      title: "Email",
      description: "Feel free to contact us via email or phone.",
      contact: "info@companyname.com",
    },
    {
      icon: "bi bi-telephone-fill",
      title: "Phone",
      description: "We look forward to hearing from you!",
      contact: "+91 123456789",
    },
    {
      icon: "bi bi-geo-alt-fill",
      title: "Office",
      description: "Follow us on social media for updates and news.",
      contact: "123 Main Street, City, Country",
    },
  ];
  return (
    <div class="contact-us">
      <div class="contact-us-header">
        <p>Our team is here to assist you.</p>
        <h3>Contact Us</h3>
        <p>Have a question or need support? Reach out to us!</p>
      </div>
      <div class="contact-us-cards">
        {cardData.map((card, index) => (
          <div class="contact-card" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class={card.icon}
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>{card.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
