import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-9">
      <Container>
        <div className="text-center text-[11px] text-white/30">
          © 2026 <strong className="text-white/60">RS MATKA</strong> · Premium
          Experience
        </div>

        <div className="mt-3 flex justify-center gap-5 text-[11px] text-white/30">
          <a href="#" className="transition hover:text-[#e50914]">
            Privacy
          </a>

          <a href="#" className="transition hover:text-[#e50914]">
            Terms
          </a>

          <a href="#download" className="transition hover:text-[#e50914]">
            Download
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
