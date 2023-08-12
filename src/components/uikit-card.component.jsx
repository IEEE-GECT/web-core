import React from "react"
function UikitCard() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="flex flex-col-reverse h-70% lg:flex-row w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl glass-effect">
        <div className="w-full lg:w-1/2">
          <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
            <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
              <h4 className="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">
                12:00pm
              </h4>
              <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">
                23 December, Sunday
              </h4>
            </div>
            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
              CES - The Global Stage for Innovation
            </h2>
            <p className="mb-6 font-normal justify-center text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
              The Consumer Technology Association’s CES 2020 will take place on
              7-10 January at the Las Vegas Convention Center in Nevada. It will
              bring together over 150,000 delegates and 4,500 exhibitors to
              explore the business of consumer technologies.The Consumer
              Technology Association’s CES 2020 will take place on 7-10 January
              at the Las Vegas Convention Center in Nevada. It will bring
              together over 150,000 delegates and 4,500 exhibitors to explore
              the business of consumer technologies.The Consumer Technology
              Association’s CES 2020 will take place on 7-10 January at the Las
              Vegas Convention Center in Nevada. It will bring together over
              150,000 delegates and 4,500 exhibitors to explore the business of
              consumer technologies.The Consumer Technology Association’s CES
              2020 will take place on 7-10 January at the Las Vegas Convention
              Center in Nevada. It will bring together over 150,000 delegates
              and 4,500 exhibitors to explore the business of consumer
              technologies.The Consumer Technology Association’s CES 2020 will
              take place on 7-10 January at the Las Vegas Convention Center in
              Nevada. It will bring together over 150,000 delegates and 4,500
              exhibitors to explore the business of consumer technologies.
            </p>
            <div className="flex lg:items-center items-start flex-col lg:flex-row">
              {/* <div className="flex items-center">
                                <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg" alt="avatar" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1">+12 Attendees</p>
                            </div> */}
              <div className="mt-4 lg:mt-0 ml-0 lg:ml-12 flex items-end">
                <span className="mr-1 text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={11} r={3} />
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal text-center">
                  Las Vegas, Nevada
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex flex-row items-center justify-between border-t border-gray-300">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    defaultChecked
                    type="radio"
                    name="radio"
                    className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                  />
                  <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">
                  Going
                </p>
              </div>
              <div className="flex items-center ml-6">
                <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    type="radio"
                    name="radio"
                    className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                  />
                  <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">
                  Not Going
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-gray-600 dark:text-gray-400 hover:text-gray-700 cursor-pointer mr-4">
                <svg
                  className="feather feather-bookmark"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="text-indigo-700 dark:text-indigo-600 hover:text-indigo-600 cursor-pointer">
                <svg
                  className="feather feather-share-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={18} cy={5} r={3} />
                  <circle cx={6} cy={12} r={3} />
                  <circle cx={18} cy={19} r={3} />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
          <img
            className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png"
            alt="banner"
          />
        </div>

        <style>
          {` .checkbox:checked {
                                    border: none;
                                }
                                .checkbox:checked + .check-icon {
                                    display: flex;
                                }`}
        </style>
      </div>
      {/* Card code block end */}
    </>
  )
}
export default UikitCard
