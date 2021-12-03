import React from 'react';

export const PageTitle = ({ chance, owner, winner, fee, pot, fee_strategy, has_played, play, reset }) => {
  return (
    <>
      <div className="w-full mt-9 px-5 md:px-9">
        <div className="w-full xl:w-1/2 mx-auto bg-white rounded-md shadow-2xl py-6">
          <h2 className="text-center font-medium text-gray-800 text-3xl mx-4">
            This page was created not for the game just for testing
          </h2>
        </div>
      </div>
      <div className="w-full sm:block md:block lg:flex xl:flex px-5 mt-9 md:px-9">
        <div className="w-full bg-white rounded-md px-5 py-6 shadow-2xl">
          <p className="text-sm font-medium text-gray-400">Info about lottery</p>
          <div className="block  xl:pr-0 text-gray-900">
            <div className="flex w-full xl:w-1/2 mx-auto border-2 bg-yellow-400 border-yellow-400 my-3 p-3 rounded-md font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-3">Pot</p>
              <p className="ml-auto">
                {pot}
                <span className="font-bold"> Ⓝ</span>
              </p>
            </div>
          </div>
          <div className="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
            <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="ml-3">Chance of victory</p>
              <p className="ml-auto">{chance == '' ? chance : chance.match(/(\d+)/)[0] + '%'}</p>
            </div>
          </div>
          <div className="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
            <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="ml-3">Owner</p>
              <p className="ml-auto">{owner}</p>
            </div>
            <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
              <p className="ml-3">Winner</p>
              <p className="ml-auto">{winner === null ? 'No winner yet' : winner}</p>
            </div>
          </div>
          <div className="sm:block md:block lg:block xl:flex xl:pr-0 text-gray-900">
            <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-3">Fee</p>
              <p className="ml-auto">{fee}</p>
            </div>
            <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <p className="ml-3">Fee strategy</p>
              <p className="ml-auto">{fee_strategy}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-md px-5 py-6 shadow-2xl md:ml-0 mt-9 lg:mt-0 lg:ml-9 ">
          <div className="block md:flex">
            <div className="">
              <p className="text-sm font-medium text-gray-400">Place your bet</p>
              <p className="text-gray-900 font-bold text-2xl my-2">
                First time is free to play
                <br className="hidden md:block" /> and you may win!
              </p>
              <p className="text-gray-600 font-normal w-2/3">
                If you've already played once then any other play costs you a fee. This fee is calculated as 1 NEAR X
                the square of the total number of unique players
              </p>
            </div>
            {has_played ? (
              <div className="ml-auto mt-10">
                <p className="text-gray-500 flex font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                  Fee
                </p>
                <p className="text-gray-900 text-xl font-bold mt-2 ml-2">{fee}</p>
              </div>
            ) : null}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={play}
              style={{ boxShadow: '0px 4px 15px rgba(255, 206, 34, 0.75)' }}
              className="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300"
            >
              Play
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={reset}
              style={{ boxShadow: '0px 4px 15px rgba(255, 206, 34, 0.75)' }}
              className="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
