import React from 'react';

export const Navigation = () => {
  return (
    <>
      <div className="w-full flex bg-white text-gray-900 px-5 md:px-9">
        <a href="#" className="inline-block flex text-lg font-medium my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 text-yellow-400 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
          Smart lottery
        </a>
        <div v-if="accountId" className="ml-auto hidden md:flex">
          <a
            href="#"
            className="block flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 hover:bg-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
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
            {'accountId'}
          </a>
          <button
            click="signOut"
            className="block flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
        <div v-else className="ml-auto hidden md:flex">
          <button
            click="signIn"
            className="block flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300"
          >
            Login
          </button>
        </div>
        <a href="#" className="sm:block md:hidden mt-6 ml-auto text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </a>
      </div>
    </>
  );
};
