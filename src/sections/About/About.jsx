import Container from "../../components/common/Container";

function About() {
  return (
    <section className="border-t border-white/10 py-24 md:py-28">
      <Container>
        <div className="max-w-[780px]">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
            About RS MATKA
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/45 md:text-base">
            RS MATKA is a modern platform built around a simple, responsive and
            premium user experience. The interface keeps important actions
            clear, fast and easy to access across devices.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
