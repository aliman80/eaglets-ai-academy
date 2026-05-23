import React, { useState } from 'react';
import { siteData } from '../data';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Strip leading 0 and generate URL
  const whatsappNumber = siteData.contact.whatsapp.replace(/^0/, '');
  const whatsappUrl = `https://wa.me/92${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20Eaglets%20AI%20Academy%20courses.`;

  return (
    <div className="whatsapp-floating-container">
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <span className="tooltip-text">Chat with Dr. Ali</span>
          <button className="tooltip-close" onClick={() => setShowTooltip(false)} aria-label="Close tooltip">×</button>
        </div>
      )}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30" className="whatsapp-svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.69 1.457 5.215L2 22l4.908-1.411A9.954 9.954 0 0012.004 22C17.528 22 22 17.528 22 12.004 22 6.48 17.528 2 12.004 2zm0 18a7.962 7.962 0 01-4.14-1.15l-.297-.176-3.082.886.903-2.955-.196-.31A7.957 7.957 0 014 12.004C4 7.59 7.59 4 12.004 4 16.42 4 20 7.59 20 12.004 20 16.42 16.42 20 12.004 20zm4.568-6.311c-.25-.125-1.478-.729-1.707-.812-.229-.084-.396-.125-.563.125-.166.25-.646.812-.791.979-.146.167-.292.188-.542.063-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.389-1.73-.146-.25-.015-.385.11-.51.112-.113.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.203-.49-.41-.424-.563-.432l-.479-.01c-.167 0-.438.063-.667.313-.229.25-.875.854-.875 2.083s.896 2.417.996 2.552c.1.135 1.763 2.693 4.272 3.778.597.258 1.064.412 1.428.528.6.19 1.147.163 1.579.098.482-.072 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.187-.063-.105-.229-.167-.479-.292z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
