function RubberDuck() {
  return (
    <svg
      viewBox="0 0 120 100"
      className="w-20 h-20 sm:w-24 sm:h-24 animate-bob drop-shadow-[4px_5px_0_rgba(26,23,20,0.5)]"
      role="img"
      aria-label="Animated yellow rubber duck"
    >
      {/* Body */}
      <ellipse cx="55" cy="68" rx="42" ry="28" fill="#E6A33A" stroke="#1A1714" strokeWidth="3" />
      {/* Tail */}
      <path d="M95 58 Q108 52 105 68 Q98 70 92 64 Z" fill="#E6A33A" stroke="#1A1714" strokeWidth="3" strokeLinejoin="round" />
      {/* Head */}
      <circle cx="32" cy="42" r="22" fill="#E6A33A" stroke="#1A1714" strokeWidth="3" />
      {/* Beak */}
      <path d="M12 42 Q2 44 10 52 Q18 50 16 44 Z" fill="#C24A3A" stroke="#1A1714" strokeWidth="3" strokeLinejoin="round" />
      <line x1="10" y1="47" x2="16" y2="47" stroke="#1A1714" strokeWidth="1.5" />
      {/* Eye */}
      <circle cx="34" cy="36" r="5" fill="#FFFFFF" stroke="#1A1714" strokeWidth="2.5" />
      <circle cx="36" cy="36" r="2.5" fill="#1A1714" />
      {/* Wing */}
      <path d="M50 58 Q70 52 78 64 Q72 78 52 74 Q44 68 50 58 Z" fill="#F2C56A" stroke="#1A1714" strokeWidth="3" strokeLinejoin="round" />
      {/* Water ripple */}
      <path d="M18 92 Q40 96 92 92" fill="none" stroke="#4B5E7A" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M28 98 Q50 102 80 98" fill="none" stroke="#4B5E7A" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export default RubberDuck;
