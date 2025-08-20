import React from 'react';

// This component creates a simple, clean chevron icon that matches your design.
// It accepts a className prop so you can style it with Tailwind CSS.
export const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Apply classes like "w-8 h-8 text-white" here
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);