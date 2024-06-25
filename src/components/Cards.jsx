import React from "react";

function Cards() {
  const cardData = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1573878416776-932ce6911da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYwODI1NXw&ixlib=rb-4.0.3&q=80&w=1080",
      title: "Real-time Chat",
      description:
        "Instant messaging for quick and efficient communication among employees.",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1713947503588-8ff8196dc4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYwODI1NHw&ixlib=rb-4.0.3&q=80&w=1080",
      title: "File Sharing",
      description:
        "Share files and documents securely within the portal for easy access and collaboration.",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1515515113139-f2840a3ddd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYwODI1NHw&ixlib=rb-4.0.3&q=80&w=1080",
      title: "Group Collaboration",
      description:
        "Create groups, share ideas, and collaborate on projects in real-time for enhanced productivity.",
    },
  ];
  return (
  
    <div className="cards-parent-container">
    <div class="cards-container">
      {cardData.map((card, index) => (
        <div class="card" key={index}>
          <img src={card.imgURL} alt={index} srcset="" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
      <div className="Main-buttons">
        <button class="Main-btn">Learn More</button>
        <button class="Main-btn2">Get Started</button>
      </div>
    </div>
  );
}

export default Cards;
