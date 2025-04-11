import React from "react";
import './Ubicacion.css';

const ExternalButton = ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="responsive-btn"
  >
    {children}
  </a>
);

export default ExternalButton;
