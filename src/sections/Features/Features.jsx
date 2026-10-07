import Container from "../../components/common/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚡",
    title: "Fast & Smooth",
    description:
      "Responsive navigation with a clean mobile-first interface and quick interactions.",
  },
  {
    icon: "◆",
    title: "Modern Design",
    description:
      "Premium dark visuals with bold red highlights and a sharp, professional layout.",
  },
  {
    icon: "◉",
    title: "Mobile Ready",
    description:
      "Optimized for modern phones and smaller screens without sacrificing desktop polish.",
  },
];

function Features() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Premium Experience
          </h2>

          <p className="mt-3 text-sm text-white/40">
            Everything focused on a clean and effortless experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
