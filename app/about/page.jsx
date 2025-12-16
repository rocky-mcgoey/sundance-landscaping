import BackgroundShell from "@/components/ui/BackgroundShell";

export default function AboutPage() {
  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="h-[calc(100vh-88px)] overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-black/45 p-10 ring-1 ring-white/10 backdrop-blur-sm">
            {/* HERO */}
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Award Winning Landscapes Since 1977
            </h1>

            <div className="mt-6 space-y-5 text-white/85 leading-relaxed">
              <p>
                Sundance Landscaping is a landscape design and construction firm
                specializing in high-end custom residential landscape
                architecture and construction. Since 1977, Sundance Landscaping
                has been designing and building award-winning landscaping for
                custom homes in Calgary and the surrounding foothills.
              </p>

              <p>
                All of the projects pictured on this site were designed and
                built by Sundance Landscaping. Over the last 34 years, we have
                designed and built more than 500 custom landscape projects with
                construction budgets ranging from $50,000 to $1.5 million.
              </p>

              <p>
                Sundance Landscaping is comprised of Paul McGoy and a team of
                landscape designers and construction specialists, many of whom
                have been with the company for over 20 years.
              </p>
            </div>

            <div className="mt-12 grid gap-10">
              {/* DESIGN */}
              <section className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h2 className="text-xl font-semibold text-white">Design</h2>

                <div className="mt-5 rounded-xl bg-black/30 p-6 ring-1 ring-white/10">
                  <p className="text-white/90 italic">
                    “Simplify, simplify, simplify.”
                  </p>
                  <p className="mt-1 text-white/70">— Henry David Thoreau</p>

                  <div className="my-4 h-px bg-white/10" />

                  <p className="text-white/90 italic">
                    “One ‘simplify’ would have sufficed.”
                  </p>
                  <p className="mt-1 text-white/70">
                    — Ralph Waldo Emerson, in response
                  </p>
                </div>

                <div className="mt-6 space-y-4 text-white/85 leading-relaxed">
                  <p>
                    All of the projects pictured on this website were designed
                    and built by Sundance Landscaping. They represent the
                    various elements or “outdoor rooms” that make up a
                    well-designed landscape plan. These outdoor living
                    environments make up the basic building blocks for
                    developing a crisp, coherent landscape plan.
                  </p>

                  <p className="text-white/90 font-semibold">
                    Our design philosophy:
                  </p>

                  <p>
                    The residential landscape is an exterior extension of the
                    home and should be conceived of as a series of usable
                    outdoor rooms that are inspired by and reflect the timeless
                    and distinct character of your home.
                  </p>
                </div>
              </section>

              {/* CONSTRUCTION */}
              <section className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h2 className="text-xl font-semibold text-white">
                  Construction
                </h2>

                <div className="mt-6 space-y-4 text-white/85 leading-relaxed">
                  <p>
                    Sundance Landscaping is a full service landscape
                    construction firm specializing in high-end landscape design
                    and construction. We have an experienced team of highly
                    qualified craftsmen, stone masons, equipment operators,
                    concrete workers and wood workers, with the expertise and
                    equipment to professionally construct and install all
                    aspects of landscape construction. Since 1977, we have built
                    over 500 custom landscape projects with budgets ranging from
                    $50,000 to $1.5 million.
                  </p>

                  <p className="text-white/90 font-semibold">
                    Our construction philosophy:
                  </p>

                  <p>
                    If you want a professional job that looks timeless and is
                    built to last, you have to use the highest quality materials
                    and the best professionals to install them.
                  </p>

                  <p className="text-white/90 font-semibold">
                    Some of our main construction services include:
                  </p>

                  <ul className="grid gap-2 text-white/80 md:grid-cols-2">
                    <li>• Patios</li>
                    <li>• Decks</li>
                    <li>• Retaining walls</li>
                    <li>• Driveways and gates</li>
                    <li>• Fences</li>
                    <li>• Gazebos</li>
                    <li>• Fireplaces</li>
                    <li>• Swimming pools and hot tubs</li>
                    <li>• Ponds and waterfalls</li>
                    <li>• Sport courts</li>
                    <li>• Trees and shrubs</li>
                    <li>• Irrigation</li>
                    <li>• Night lighting</li>
                    <li>• Various accessories</li>
                  </ul>
                </div>
              </section>

              {/* AWARDS */}
              <section className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h2 className="text-xl font-semibold text-white">
                  Awards, Accolades & Events
                </h2>

                <div className="mt-6 space-y-4 text-white/85 leading-relaxed">
                  <p>
                    Over the years our landscapes have appeared on television,
                    in numerous publications, won awards, and served as the
                    sites of many fundraising events. Our work has been
                    recognized both locally and nationally for design excellence
                    and craftsmanship.
                  </p>

                  <p>
                    The Mirosh residence was featured in{" "}
                    <span className="italic">Best Home Magazine</span> in 2006,
                    and the Maslechko residence appeared on{" "}
                    <span className="italic">HGTV</span> in 2004.
                  </p>

                  <p>
                    The Langpap residence was featured in{" "}
                    <span className="italic">
                      Alberta Gardener’s Beautiful Gardens
                    </span>{" "}
                    (2006) and received multiple awards from the Calgary
                    Horticultural Society, including first prize for Best
                    Outdoor Living, Best Water Garden, and Best Open Large
                    Garden, as well as second prize for Best Perennial Garden.
                  </p>

                  <p>
                    The King residence was the site of the{" "}
                    <span className="italic">Wheels for the World</span>{" "}
                    fundraising event, raising money for AIDS relief efforts in
                    Africa.
                  </p>
                </div>

                {/* Awards grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">
                      Best Home Magazine
                    </p>
                    <p className="text-white/70">Feature · 2006</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">HGTV</p>
                    <p className="text-white/70">Television Feature · 2004</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">
                      Alberta Gardeners
                    </p>
                    <p className="text-white/70">Beautiful Gardens · 2006</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">
                      Best Outdoor Living
                    </p>
                    <p className="text-white/70">1st Prize</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">
                      Best Water Garden
                    </p>
                    <p className="text-white/70">1st Prize</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
                    <p className="font-semibold text-white">
                      Best Perennial Garden
                    </p>
                    <p className="text-white/70">2nd Prize</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10 sm:col-span-2 lg:col-span-3">
                    <p className="font-semibold text-white">
                      Wheels for the World
                    </p>
                    <p className="text-white/70">
                      AIDS Relief Fundraising Event · King Residence
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h2 className="text-xl font-semibold text-white">
                Ready to upgrade your outdoor room?
              </h2>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-400"
                >
                  Contact Us
                </a>

                <a
                  href="/projects"
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundShell>
  );
}
