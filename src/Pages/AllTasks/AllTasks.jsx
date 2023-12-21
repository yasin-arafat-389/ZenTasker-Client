const AllTasks = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* To Do */}
        <div className="border-2 border-orange-400 rounded-lg ">
          <div className="title bg-teal-300 rounded-md rounded-b-none">
            <h1 className="text-2xl font-bold text-white text-center py-2">
              To Do
            </h1>
          </div>

          {/* Tasks */}
          <div className="tasks-container grid-cols-1 gap-2">
            <div className="w-[80%] cursor-move mx-auto mt-2 flex flex-col justify-between items-start bg-yellow-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 font-bold mb-3">
                  13 things to work on
                </h4>
                <p className="text-gray-800 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                </p>
              </div>

              <div className="mt-3">
                <h1>Priority: High</h1>
              </div>

              <div className="w-full flex flex-col items-start">
                <div className="flex items-center justify-between text-gray-800 w-full">
                  <p className="text-sm">Deadline: 20/12/2023</p>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                    aria-label="edit note"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-pencil"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing */}
        <div className="bg-deep-orange-600 h-10"></div>

        {/* Completed */}
        <div className="bg-lime-500 h-10"></div>
      </div>
    </div>
  );
};

export default AllTasks;
