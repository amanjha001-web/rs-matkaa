
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import logo from "../../assets/images/logo.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-[#e50914]/10 blur-[120px] sm:h-[450px] sm:w-[450px] lg:-right-40 lg:top-20 lg:h-[500px] lg:w-[500px]" />

      <Container>
        <div
          className="
            grid
            min-h-[auto]
            items-center
            gap-12
            py-16
            sm:py-20
            lg:min-h-[680px]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-4
            lg:py-20
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#e50914] sm:text-[10px] lg:justify-start">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e50914]" />
              Premium Matka Experience
            </div>

            {/* Heading */}
            <h1
              className="
                mx-auto
                max-w-[850px]
                text-[clamp(48px,12vw,105px)]
                font-black
                leading-[0.9]
                tracking-[-0.065em]
                sm:text-[clamp(58px,10vw,105px)]
                lg:mx-0
              "
            >
              Welcome to
              <br />
              <span className="text-[#e50914]">RS MATKA.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-7
                max-w-[560px]
                text-sm
                leading-7
                text-white/50
                sm:mt-8
                sm:text-base
                lg:mx-0
              "
            >
              Experience a modern, responsive and premium Matka platform
              designed with a clean interface, smooth navigation and a powerful
              mobile-first experience.
            </p>

            {/* CTA */}
            {/* CTA */}
            <div className="mt-8 flex justify-center sm:mt-9 lg:justify-start">
              <Button
                href="/public/application-a3ab0e8b-5066-486c-a8c0-5c3965b355b4.apk"
                className="px-8 py-4 text-sm sm:px-10 sm:py-5 sm:text-sm"
              >
                ↓ &nbsp; DOWNLOAD RS MATKA APP
              </Button>
            </div>
          </div>

          {/* ================= LOGO / CIRCLE ASSEMBLY ================= */}
          <div
            className="
              relative
              flex
              min-h-[390px]
              items-center
              justify-center
              animate-[float_6s_ease-in-out_infinite]
              sm:min-h-[480px]
              lg:min-h-[560px]
            "
          >
            {/* ================= OUTER ROTATING RING ================= */}
            <div
              className="
                absolute
                h-[270px]
                w-[270px]
                animate-[spin_18s_linear_infinite]
                rounded-full
                border
                border-dashed
                border-[#e50914]/40

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[430px]
                lg:w-[430px]
              "
            />

            {/* ================= INNER RING ================= */}
            <div
              className="
                absolute
                h-[235px]
                w-[235px]
                rounded-full
                border
                border-[#e50914]/20

                sm:h-[300px]
                sm:w-[300px]

                lg:h-[385px]
                lg:w-[385px]
              "
            />

            {/* ================= RED GLOW ================= */}
            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#e50914]/20
                blur-[75px]

                sm:h-[300px]
                sm:w-[300px]
                sm:blur-[90px]

                lg:h-[350px]
                lg:w-[350px]
              "
            />

            {/* ================= MAIN LOGO CIRCLE ================= */}
            <div className="relative z-10">
              <div
                className="
                  relative
                  h-[210px]
                  w-[210px]
                  overflow-hidden
                  rounded-full
                  border-4
                  border-[#e50914]
                  bg-[#0d0d0d]
                  shadow-[0_0_60px_rgba(229,9,20,0.3)]

                  sm:h-[270px]
                  sm:w-[270px]
                  sm:shadow-[0_0_70px_rgba(229,9,20,0.3)]

                  lg:h-[350px]
                  lg:w-[350px]
                  lg:shadow-[0_0_80px_rgba(229,9,20,0.3)]
                "
              >
                <img
                  src={logo}
                  alt="RS Matka"
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>

            {/* ================= ORBIT DOT ================= */}
            <div className="pointer-events-none absolute inset-0 animate-[spin_8s_linear_infinite]">
              <span
                className="
                  absolute
                  left-1/2
                  top-[calc(50%-135px)]
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  rounded-full
                  bg-[#e50914]
                  shadow-[0_0_18px_#e50914]

                  sm:top-[calc(50%-170px)]
                  sm:h-3
                  sm:w-3

                  lg:top-[calc(50%-215px)]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
