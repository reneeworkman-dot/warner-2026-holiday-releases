import React from 'react';

interface Props {
  onClick: () => void;
}

export const DollyOrnament: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="my-16 mx-auto flex flex-col items-center gap-3 cursor-pointer group"
    >
      <img
        src="/bg/dolly.jpg"
        alt=""
        className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="font-handwriting text-4xl text-amber-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
        dolly
      </span>
      <span className="font-note text-sm text-amber-100/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
        a page in her memory
      </span>
    </button>
  );
};
