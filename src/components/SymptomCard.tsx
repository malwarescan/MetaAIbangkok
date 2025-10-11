import React from 'react';
interface SymptomCardProps {
  label: string;
}
export function SymptomCard({
  label
}: SymptomCardProps) {
  return <div className="px-3 py-1 bg-pink-50 text-pink-600 text-sm rounded-full hover:bg-pink-100 cursor-pointer transition-colors duration-200">
      {label}
    </div>;
}