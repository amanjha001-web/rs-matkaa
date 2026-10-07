import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

function Download() {
  return (
    <section id="download" className="py-24 md:py-28">
      <Container>
        <div className="rounded-lg border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center md:px-10">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Get RS MATKA on your phone
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm text-white/40">
            Tap the button below to continue to the RS MATKA app.
          </p>

          <div className="mt-8">
            <Button
              href='/public/application-a3ab0e8b-5066-486c-a8c0-5c3965b355b4.apk'
            >↓ &nbsp; DOWNLOAD NOW</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Download;
