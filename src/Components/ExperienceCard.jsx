// src/components/ExperienceCard.jsx
import React from 'react';
import './ExperienceCard.css';


export default function InfoCard({ number, text, color = "text-blue-600" }) {
  return (
    <div className="experience-card p-6 bg-white shadow-md rounded-lg text-center ">
      <h2 className={`text-5xl font-extrabold ${color}`}>
        {number}
      </h2>
      <p className="text-lg font-medium text-gray-700">
        {text}
      </p>
    </div>
  );
}
