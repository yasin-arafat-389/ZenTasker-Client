const WhoIsItFor = () => {
  return (
    <div>
      <div className="text-center w-[90%] mx-auto p-8 my-10">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Whom this can be of benefit?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://i.ibb.co/znswGXF/960x0.webp"
              className="inline-block rounded-lg w-[500px] shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Busy Professionals
            </h3>
            <p className="sm:text-lg mt-6">
              Ideal for professionals juggling multiple tasks, our intuitive
              workflow ensures seamless organization. Stay on top of deadlines
              and priorities with ease, allowing you to focus on what matters
              most in your dynamic work environment.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://i.ibb.co/gR8Ghc3/Six-Traits-e1495217294358.jpg"
              alt="project members"
              className="inline-block rounded-lg shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Project Managers
            </h3>
            <p className="sm:text-lg mt-6">
              Empower project managers to lead with efficiency. Our intuitive
              workflow and drag-and-drop functionality simplify project
              coordination, facilitating quick updates and adjustments to keep
              every project on the path to success.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left  text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://i.ibb.co/Jx14qM4/getty-492755552-336645.jpg"
              alt="editor"
              className="inline-block rounded-lg shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Collaborative Teams
            </h3>
            <p className="sm:text-lg mt-6">
              Perfect for teams working collaboratively, our task manager
              fosters real-time coordination. Easily assign, update, and track
              tasks with intuitive drag-and-drop features, promoting a cohesive
              and synchronized team effort.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://i.ibb.co/r2fjg3N/how-to-implement-an-effective-remote-working-strategy.webp"
              alt="bulk editing"
              className="inline-block rounded-l-lg shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Remote Workers
            </h3>
            <p className="sm:text-lg mt-6">
              Tailored for the modern remote workforce, our intuitive workflow
              enhances productivity from any location. Stay connected and
              organized with seamless task management, allowing remote workers
              to adapt and thrive in a virtual work environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsItFor;
