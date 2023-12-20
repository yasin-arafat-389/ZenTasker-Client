import { Link, useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  let data = useLoaderData();
  let singleData = data.events;
  let { slug } = useParams();

  let filteredData = singleData.filter((dataSlug) => dataSlug.slug === slug);

  return (
    <div>
      <div className="w-[90%]  md:w-[95%] lg:w-[60%]  my-24 mx-auto md:px-6">
        {filteredData.map((item, index) => (
          <section key={index} className="mb-32">
            <img
              src={item.image}
              className="mb-6 w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-lg shadow-lg dark:shadow-black/20"
              alt="image"
            />

            <h1 className="mb-6 text-3xl font-bold">{item.category}</h1>

            <p>{item.long_description}</p>

            <p className="font-bold mt-5">
              <div className="badge badge-secondary text-[#fff]">Price:</div>{" "}
              {item.price}
            </p>
            <Link
              to="/contact"
              title=""
              className=" items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-6 hover:bg-yellow-400 focus:bg-yellow-400 flex justify-center"
              role="button"
            >
              Contact Us
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
