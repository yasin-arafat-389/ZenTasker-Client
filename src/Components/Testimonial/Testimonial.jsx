import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl"
              data-aos="fade-down"
            >
              Trusted by <span className="text-blue-600">10k+</span> satisfied
              clients worldwide.
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div
              className="overflow-hidden bg-white rounded-md shadow"
              data-aos="flip-right"
            >
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://i.ibb.co/64J5VD4/istockphoto-1318928248-612x612.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Exceptional! Our recent corporate meeting organized by them
                    was a resounding success. From meticulous planning to
                    flawless execution, they ensured every detail was perfect.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Henry Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div
              className="overflow-hidden bg-white rounded-md shadow"
              data-aos="fade-up"
            >
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://i.ibb.co/VNzqyGL/leilani-angel-K84vnnzxm-TQ-unsplash-scaled.webp"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Working with them for our recent product launch event was
                    an absolute game-changer. Their attention to detail,
                    creativity, and flawless execution made our event an
                    overwhelming success. ”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Robert Fox
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Founder at Brain.co
                </p>
              </div>
            </div>

            <div
              className="overflow-hidden bg-white rounded-md shadow"
              data-aos="flip-left"
            >
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://i.ibb.co/qstkhL8/headshot-with-client-testimonial.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Our award ceremony event was a success. They orchestrated
                    every detail with precision and flair, turning our vision
                    into a breathtaking reality. From the elegant décor to the
                    seamless flow of the evening, their expertise shone
                    brightly. ”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  John Watson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  CEO of Rainbow IT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
