const Pricing = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
            <span className="text-indigo-600">Flexible</span> Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-yellow-200 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Essentia</span>
                <span>
                  <span className="font-medium text-gray-800 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">3.33 </span>
                </span>
                <span className="text-gray-800 font-medium">/ month</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-800">
              <li className="flex text-lg mb-2">
                <span className="ml-3">
                  Unlock essential task management features and streamline your
                  workflow with Essentia. Ideal for individuals and small teams.
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>

          <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-3xl font-semibold text-white">
                  Pinnacle
                </span>
                <span>
                  <span className="font-medium text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold text-white">19.99 </span>
                </span>
                <span className="font-medium">/ month</span>
              </div>
            </div>
            <ul className="mb-10 font-medium text-xl">
              <li className="flex mb-6">
                <span className="ml-3">
                  Elevate your productivity to the Pinnacle with our premium
                  plan. Perfect for growing businesses and teams, Pinnacle
                  offers advanced features, task analytics, priority support,
                  and enhanced collaboration tools.
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>

          <div className="w-full flex-1 mt-8 p-8 order-3 bg-yellow-200 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Summit</span>
                <span>
                  <span className="font-medium text-gray-800 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">1.25 </span>
                </span>
                <span className="text-gray-800 font-medium">/ month</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-800">
              <li className="flex text-lg mb-2">
                <span className="ml-3">
                  Reach the Summit of productivity with our fully customizable
                  plan for large enterprises. Enjoy all the features of the
                  Pinnacle plan.
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
