const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-10 bg-[#fcf5ee] sm:py-16 lg:py-14">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Amazing Fetaures
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Unleash Productivity with the Intuitive Drag-and-Drop
              Functionality, Revolutionizing the Way You Organize, Prioritize,
              and Execute Tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mt-12 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-cyan-50  shadow-xl hover:shadow-md rounded-lg">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/729WS8R/drag-and-drop.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Effortless Task Organization
                </h3>
                <p className="mt-4 text-base text-gray-800">
                  Transform your work experience with our revolutionary
                  drag-and-drop functionality. Easily rearrange tasks,
                  prioritize deadlines, and adapt to changing priorities with a
                  simple, intuitive interface. Our task manager empowers you to
                  effortlessly organize your workload, putting you in control of
                  your day like never before
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-cyan-50 shadow-xl hover:shadow-md rounded-lg">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/QY5g0gt/updated.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Seamless Task Updates
                </h3>
                <p className="mt-4 text-base text-gray-800">
                  Stay agile and responsive with our task {`manager's`}
                  drag-and-drop update feature. Instantly modify task details,
                  deadlines, and priorities by seamlessly dragging tasks to
                  their new status. Keep your projects on track with the
                  flexibility to adapt and refine your plan in real-time,
                  ensuring your team is always in sync with the latest changes.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-cyan-50 shadow-xl hover:shadow-md rounded-lg">
              <div className="py-10 px-9">
                <img
                  className="w-[20%]"
                  src="https://i.ibb.co/42QBKvQ/shuttle.png"
                  alt=""
                />
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Boost Productivity With Ease
                </h3>
                <p className="mt-4 text-base text-gray-800">
                  Maximize your productivity by leveraging the intuitive
                  drag-and-drop workflow of our task manager. Streamline your
                  processes as you effortlessly move tasks through stages,
                  adapting to project needs with unparalleled ease. Experience a
                  fluid and dynamic work environment that enhances efficiency
                  and propels you towards your goals.
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
