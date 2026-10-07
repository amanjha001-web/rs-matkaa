const stats = [
  {
    value: "RS",
    label: "Premium Platform",
  },
  {
    value: "4.5 ★",
    label: "User Rating",
  },
  {
    value: "Fast",
    label: "Performance",
  },
  {
    value: "1 MB+",
    label: "Lightweight UI",
  },
  {
    value: "Mobile",
    label: "Optimized",
  },
];

function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#0d0d0d]">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 py-7 text-center ${
              index !== 0 ? "border-l border-white/10" : ""
            }`}
          >
            <strong className="block text-lg font-black text-white">
              {stat.value}
            </strong>

            <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
