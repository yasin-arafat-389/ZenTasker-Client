const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
              <p className="text-xs font-semibold tracking-widest text-white uppercase">
                10+ Years of experience
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We are dedicated to making your event dreams a reality. With years
              of experience and a passion for perfection, we handle every detail
              with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-base-100 shadow-xl hover:shadow-md">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/G5mQfMc/satisfaction.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Experience and Expertise
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  With over 10 of experience in the event management industry,
                  we bring a wealth of knowledge and expertise to every project.
                  Our seasoned team has successfully organized a wide range of
                  events, from intimate gatherings to large-scale conferences.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-base-100 shadow-xl hover:shadow-md">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/G9y99Yy/user-preferences.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Personalized Approach
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  We believe that every event is unique, just like our clients.
                  Our approach is tailored to your specific needs and
                  preferences. We take the time to listen to your vision, goals,
                  and ideas, and then we craft a customized plan.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-base-100 shadow-xl hover:shadow-md">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/pX7J3P3/search.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Attention to Detail
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  It is the little things that make a big difference. At [Your
                  Event Management Company Name], we are meticulous about every
                  detail, from venue selection and decor to logistics and
                  scheduling. Our commitment to perfection ensures that your
                  event runs seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
