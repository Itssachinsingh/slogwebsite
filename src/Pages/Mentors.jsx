import React, { useRef, useEffect, useState } from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import man from '../images/man.jpg';
import women from '../images/tutor2.jpg'

const images = [
    { id: 1, src: man, name: "Person 1" },
    { id: 2, src: man, name: "Person 2" },
    { id: 3, src: man, name: "Person 3" },
    { id: 4, src: man, name: "Person 4" },
    { id: 5, src: man, name: "Person 5" },
    { id: 6, src: man, name: "Person 6" },
    { id: 7, src: man, name: "Person 7" },
    { id: 8, src: man, name: "Person 8" },
];

const teamMembers = [
    {
        id: 1,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."
    },
    {
        id: 2,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 3,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 4,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 5,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 6,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 7,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    },
    {
        id: 8,
        name: "Lisa Haden",
        field: "Computer Science",
        image: women,
        description: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.",
        extra: "Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy.Dedicated 6+ years of her life in Training Engineers in Computer science and making them skilled and relevent in the changing Economy."

    }

];

export const Mentors = () => {
    const containerRef = useRef();
    const [cardStyles, setCardStyles] = useState([]);


    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const containerCenter = container.scrollLeft + container.offsetWidth / 2;

            const updated = Array.from(container.children).map((card) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = (cardCenter - containerCenter) / container.offsetWidth;
                const scale = 1 - Math.min(Math.abs(distance) * 0.4, 0.4);
                const rotate = distance * 20;

                return {
                    transform: `scale(${scale}) rotateY(${rotate}deg)`,
                    zIndex: 1000 - Math.abs(distance * 100),
                };
            });

            setCardStyles(updated);
        };

        handleScroll();
        container.addEventListener("scroll", handleScroll);

        let isDown = false;
        let startX;
        let scrollLeft;

        const startDragging = (e) => {
            isDown = true;
            container.classList.add("grabbing");
            startX = e.pageX || e.touches?.[0].pageX;
            scrollLeft = container.scrollLeft;
        };

        const stopDragging = () => {
            isDown = false;
            container.classList.remove("grabbing");
        };

        const drag = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX || e.touches?.[0].pageX;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener("mousedown", startDragging);
        container.addEventListener("mouseleave", stopDragging);
        container.addEventListener("mouseup", stopDragging);
        container.addEventListener("mousemove", drag);

        container.addEventListener("touchstart", startDragging);
        container.addEventListener("touchend", stopDragging);
        container.addEventListener("touchmove", drag);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            container.removeEventListener("mousedown", startDragging);
            container.removeEventListener("mouseleave", stopDragging);
            container.removeEventListener("mouseup", stopDragging);
            container.removeEventListener("mousemove", drag);

            container.removeEventListener("touchstart", startDragging);
            container.removeEventListener("touchend", stopDragging);
            container.removeEventListener("touchmove", drag);
        };
    }, []);

 const [selectedCard, setSelectedCard] = useState(null);
  const [cardRect, setCardRect] = useState(null);
const [expandDirection, setExpandDirection] = useState("right"); // default

  const handleCardClick = (card, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setCardRect(rect);
  setSelectedCard(card);

  const spaceRight = window.innerWidth - rect.right;
  const spaceLeft = rect.left;

  if (spaceRight > 350) {
    setExpandDirection("right");
  } else if (spaceLeft > 350) {
    setExpandDirection("left");
  } else {
    setExpandDirection("center");
  }
};

    return (
        <div>
            <Header />

            <div className="mentor-container">
                <h1>Meet Our Mentors</h1>
                <p>
                    A Team of Passionate professionals with unique Skills driving innovation and <br />
                    excellence in every project.
                </p>
                <div className="curved-slider" ref={containerRef}>
                    {images.map((img, i) => (
                        <div key={img.id} className="card" style={cardStyles[i]}>
                            <img src={img.src} alt={img.name} />
                        </div>
                    ))}
                </div>

{/* test */}
                <div className="team-container">
      <h1>Team</h1>
      <p>A Diverse group of passionate professionals...</p>

      <div className="team-cards-container">
        {teamMembers.map((card) => (
          <div
            className="team-cards"
            key={card.id}
            onClick={(e) => handleCardClick(card, e)}
          >
            <div><img src={card.image} alt={card.name} /></div>
            <div>
              <h4>{card.name}</h4>
              <span>{card.field}</span>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && cardRect && (
        <div
          className={`expanded-card ${expandDirection}`}
  style={{
    top: `${cardRect.top + window.scrollY}px`,
    left: expandDirection === "right"
      ? `${cardRect.left}px`
      : expandDirection === "left"
      ? `${cardRect.right - 350}px`
      : `${cardRect.left}px`,
    width: expandDirection === "center" ? "90%" : "350px",
  }}
  onClick={() => setSelectedCard(null)}
        >
          <img src={selectedCard.image} alt={selectedCard.name} />
          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.description}</p>
          <p className="extra-details">Extra info about {selectedCard.name} here...</p>
          <button className="close-btn" onClick={(e) => {
            e.stopPropagation();
            setSelectedCard(null);
          }}>Close</button>
        </div>
      )}
    </div>

{/* test */}


            </div>

            <Footer />
        </div>
    );
};
