import React from "react";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
    <div className="text-xs md:text-sm text-white/80 mt-1">{label}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="mx-auto w-full max-w-[1280px] px-6">
      </div>

      <main className="mx-auto w-full max-w-[1280px] px-6 pb-20">
        {/* Hero/About block */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start pt-4 md:pt-8">
          <div className="relative w-full aspect-[4/5] md:aspect-[4/5] lg:h-[640px] overflow-hidden rounded">
            <img
              src="/assets/13-spaceman-portrait.jpg"
              alt="Astronaut portrait"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 lg:gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">About Spaceman Craft</h2>
              <p className="mt-1 text-[10px] md:text-xs text-white/70">
                "Smarter Thrusters. Longer Missions. Lower Costs"
              </p>
            </div>
            <div className="space-y-4 text-sm md:text-base text-white/85 leading-6">
              <p>
                International-based deep-tech rebel startup, founded in 2022, focused on building high‑
                efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer,
                and reduce space mission costs dramatically.
              </p>
              <p>
                Our thruster lab enables breakthrough performance and reliability for next‑generation propulsion
                systems. Our mission helps satellites travel farther, operate longer, and reduce space mission costs
                dramatically.
              </p>
              <p>
                We are laser‑focused on building high‑efficiency electric propulsion systems for sustained deep‑
                space operations.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
              <Stat value="25+" label="Years of Experience" />
              <Stat value="25K" label="Completed Projects" />
              <Stat value="2K" label="Our Specialists" />
              <Stat value="5K" label="Success Stories" />
            </div>
          </div>
        </section>

        {/* CEO block */}
        <section className="mt-14 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Meet Our CEO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded">
              <img
                src="/assets/13-spaceman-portrait.jpg"
                alt="CEO portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-white/85 leading-6">
              <p>
                International-based deep-tech rebel startup, founded in 2022, focused on building high‑efficiency
                electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space
                mission costs dramatically.
              </p>
              <p>
                Our thruster lab enables state‑of‑the‑art testing for next generation propulsion designs and
                long‑duration space operations.
              </p>
              <p>
                International-based deep-tech startup focused on building high‑efficiency electric propulsion
                systems for resilient space infrastructure.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;


