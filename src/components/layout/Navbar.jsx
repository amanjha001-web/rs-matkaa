
import Container from "../common/Container";
import Button from "../common/Button";

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080808]/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-black tracking-[-0.04em] md:text-2xl"
          >
            R<span className="text-[#e50914]">S</span> MATKA
          </a>

          {/* Desktop CTA */}
          <Button href="/application-a3ab0e8b-5066-486c-a8c0-5c3965b355b4.apk">DOWNLOAD APP</Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
