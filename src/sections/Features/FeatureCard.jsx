function FeatureCard({ icon, title, description }) {
  return (
    <article className="group rounded-lg border border-white/10 bg-[#0d0d0d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/40">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-[#e50914] text-lg font-black text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-base font-bold text-white">{title}</h3>

      <p className="text-sm leading-6 text-white/40">{description}</p>
    </article>
  );
}

export default FeatureCard;
