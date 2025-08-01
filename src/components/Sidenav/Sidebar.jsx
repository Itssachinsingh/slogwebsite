import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Sidebar.css';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'course', label: 'Course' },
  { id: 'partners', label: 'Partners' },
  { id: 'stats', label: 'Stats' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'footer', label: 'Footer' },
];

export const Sidebar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="side-nav-dialogue">
      {sections.map((section) => (
        <ScrollLink
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          className="dialogue-link"
        >
          {active === section.id && (
            <div className="dialogue-box">
              {section.label}
            </div>
          )}
        </ScrollLink>
      ))}
    </div>
  );
};
