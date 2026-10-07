
function Button({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-[#e50914]
        px-6
        py-3.5
        text-xs
        font-black
        tracking-[0.08em]
        text-white
        shadow-[0_0_25px_rgba(229,9,20,0.25)]
        ${className}
      `}
    >
      {/* Infinite Shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-[130%]
          skew-x-[-20deg]
          animate-[buttonShine_3s_ease-in-out_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
        "
      />

      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>
    </a>
  );
}

export default Button;


