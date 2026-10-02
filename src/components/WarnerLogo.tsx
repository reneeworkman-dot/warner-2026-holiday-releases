import React from 'react';

interface Props {
  className?: string;
}

export const WarnerLogo: React.FC<Props> = ({ className = '' }) => (
  <img
    src={`${import.meta.env.BASE_URL}brand/warner-records-logo.png`}
    alt="Warner Records"
    className={`h-7 w-auto rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.5)] opacity-90 ${className}`}
  />
);
