import BackgroundShell from "@/components/ui/BackgroundShell";

const ADDRESS = "245188 Range Road 31A, Rocky View County, Alberta";

export default function ContactPage() {
  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="fixed left-0 right-0 top-[88px] bottom-[64px] overflow-y-auto">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:py-14 pb-24">
          <div className="rounded-2xl bg-black/45 p-6 sm:p-10 lg:p-12 ring-1 ring-white/10 backdrop-blur-sm">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Contact
            </h1>
            <p className="mt-4 max-w-3xl text-white/85 leading-relaxed">
              For design consultations, project inquiries, or general questions,
              reach out using the details below.
            </p>

            {/* Info + Map */}
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <h2 className="text-lg font-semibold text-white">
                    Sundance Landscaping Ltd.
                  </h2>

                  <div className="mt-4 space-y-3 text-white/85">
                    <p>
                      <span className="font-semibold text-white">Phone:</span>{" "}
                      <a
                        className="hover:text-lime-300"
                        href="tel:+14032887300"
                      >
                        403-288-7300
                      </a>
                    </p>

                    <p>
                      <span className="font-semibold text-white">Fax:</span>{" "}
                      <a
                        className="hover:text-lime-300"
                        href="tel:+14036785219"
                      >
                        403-678-5219
                      </a>
                    </p>

                    {/* Add an email later if time permits */}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <h2 className="text-lg font-semibold text-white">Location</h2>
                  <p className="mt-3 text-white/85 leading-relaxed">
                    Calgary, Alberta
                    <br />
                    245188 Range Road 31A
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-400"
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <h2 className="text-lg font-semibold text-white">Hours</h2>
                  <div className="mt-3 space-y-1 text-white/85">
                    <p>Monday – Saturday: 7:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <h2 className="px-3 pt-3 text-lg font-semibold text-white">
                  Map
                </h2>

                <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
                  {/*  simple embed (no API key needed) */}
                  <div className="aspect-[16/10] w-full sm:aspect-[16/11]">
                    <iframe
                      title="Sundance Landscaping Map"
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=245188%20Range%20Road%2031A%20Rocky%20View%20County%20Alberta&output=embed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundShell>
  );
}
