import HeroImg from "@/assets/images/hero.jpg";// Replace with your agency logo if you have one

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Visionary, Builder, Entrepreneur
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Kaleemullah Ahsan, a 20-year-old WordPress and Front-End Web Developer from Kamalia, Pakistan.
                With over 2.5 years of experience and a strong foundation in BSCS from Virtual University, I’ve built 
                a diverse portfolio featuring real-world projects like <strong>Bluewave</strong>, <strong>Relate NI</strong>, and <strong>Womens Wellness Werkz</strong>.
              </p>
              <p className="text-white">
                I currently work as a Front-End Developer at Coding Force and run my own agency,{" "}
                <span className="font-bold text-white">Shop Launch</span>, where I help clients bring their websites to life.
                Whether it's theme development, plugin customization, or digital strategy — I love building user-focused, responsive websites that convert.
              </p>
              <p className="text-white">
                I’m also passionate about data visualization, analytics, and using tech to solve real problems. My mission is to scale my skills,
                gain financial independence, and someday build a million-dollar web business. I document my journey through Instagram at{" "}
                <a href="https://www.instagram.com/websyncc" className="underline" target="_blank" rel="noopener noreferrer">
                  @Websyncc
                </a>{" "}
                and{" "}
                <a href="https://www.instagram.com/webgeniushub" className="underline" target="_blank" rel="noopener noreferrer">
                  @WebGeniusHub
                </a>.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm constantly learning — balancing a job, a degree, and my own side projects. My philosophy is simple:
                    improve every day, ship meaningful work, and create opportunities not just for myself, but for others through tech.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Kaleemullah Ahsan, Founder of
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">Shop Launch</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
