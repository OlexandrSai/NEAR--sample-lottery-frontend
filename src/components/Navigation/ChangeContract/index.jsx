import React, { useEffect, useState } from 'react';
import { useContract } from '../../../context/ContractProvider';

export const ChangeContract = ({ apiError, setApiError, setIsOpenChangeContact }) => {
  const { contractId, setContractId } = useContract();

  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;

  const [inputContract, setInputContract] = useState(contractId);

  const handleChange = (e) => {
    setInputContract(e.target.value);
  };

  const setDefaultContractId = () => {
    localStorage.setItem('CONTRACT_ID', defaultContractId);
    setContractId(defaultContractId);
    setInputContract(defaultContractId);
  };

  useEffect(() => {
    setInputContract(contractId);
    setApiError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId]);

  return (
    <div className="absolute z-20 w-full top-0 left-0 flex flex-col items-center bg-white shadow-xl pb-10 px-5">
      <button
        onClick={() => setIsOpenChangeContact(false)}
        className="relative z-20 flex justify-center pt-1 w-20 h-10 border-l-8 border-r-8 border-b-8 border-gray-200 rounded-b-full bg-gray-600 text-yellow-400 hover:text-gray-800 hover:bg-yellow-400 hover:border-yellow-200 animate-pulse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-4 transform rotate-180"
          viewBox="0 0 20 11"
          fill="none"
        >
          <path
            d="M1.86998 0.408361L0.0999756 1.8917L9.99998 10.1334L19.9 1.88336L18.13 0.408361L9.99998 7.18336L1.86998 0.408361Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" className="mt-4" width="151" height="40" viewBox="0 0 151 40" fill="none">
        <g clipPath="url(#clip0_303_311)">
          <path
            d="M75.5882 8.30057V31.4804C75.5882 31.657 75.4558 31.8336 75.235 31.8336H72.8067C71.7029 31.8336 70.6432 31.2596 70.0251 30.3324L59.0754 13.4222L59.4286 21.8553V31.5246C59.4286 31.7012 59.2961 31.8778 59.0754 31.8778H55.8964C55.7198 31.8778 55.5432 31.7453 55.5432 31.5246V8.30057C55.5432 8.12397 55.6757 7.94736 55.8964 7.94736H58.2806C59.3844 7.94736 60.4441 8.52133 61.0622 9.44853L72.0119 26.3146L71.6587 17.8816V8.30057C71.6587 8.12397 71.7912 7.94736 72.0119 7.94736H75.1909C75.4558 7.94736 75.5882 8.07981 75.5882 8.30057Z"
            fill="black"
          />
          <path
            d="M108.172 31.7895H104.817C104.596 31.7895 104.42 31.5687 104.508 31.3479L113.427 8.25642C113.515 8.07981 113.691 7.94736 113.868 7.94736H118.107C118.327 7.94736 118.504 8.07981 118.548 8.25642L127.511 31.3479C127.599 31.5687 127.423 31.7895 127.202 31.7895H123.846C123.714 31.7895 123.582 31.7012 123.537 31.5687L116.341 12.5833C116.252 12.3184 115.811 12.3184 115.722 12.5833L108.526 31.5687C108.437 31.7012 108.305 31.7895 108.172 31.7895Z"
            fill="black"
          />
          <path
            d="M150.912 31.2596L144.201 22.6941C147.998 21.9877 150.205 19.4269 150.205 15.4974C150.205 10.9938 147.291 7.94736 142.081 7.94736H132.721C132.456 7.94736 132.235 8.16812 132.235 8.43303C132.235 10.1991 133.648 11.612 135.414 11.612H141.728C144.863 11.612 146.364 13.2015 146.364 15.5415C146.364 17.8816 144.907 19.471 141.728 19.471H132.809C132.544 19.471 132.324 19.6918 132.324 19.9567V31.4362C132.324 31.6129 132.456 31.7895 132.677 31.7895H135.856C136.032 31.7895 136.209 31.657 136.209 31.4362V22.9149H139.874L145.702 30.5091C146.32 31.3479 147.291 31.7895 148.351 31.7895H150.779C150.956 31.7895 151.088 31.4804 150.912 31.2596Z"
            fill="black"
          />
          <path
            d="M98.1057 7.94736H83.3148C83.0499 7.94736 82.8733 8.12397 82.8733 8.38888C82.8733 10.155 84.3303 11.612 86.0964 11.612H98.1057C98.2824 11.612 98.459 11.4795 98.459 11.2588V8.25642C98.4148 8.07981 98.2824 7.94736 98.1057 7.94736ZM98.1057 28.1248H87.0677C86.8911 28.1248 86.7145 27.9924 86.7145 27.7716V21.8111C86.7145 21.6345 86.847 21.4579 87.0677 21.4579H97.2669C97.4435 21.4579 97.6201 21.3254 97.6201 21.1047V18.1023C97.6201 17.9257 97.4876 17.7491 97.2669 17.7491H83.359C83.0941 17.7491 82.8733 17.9699 82.8733 18.2348V31.2596C82.8733 31.5246 83.0941 31.7453 83.359 31.7453H98.1057C98.2824 31.7453 98.459 31.6129 98.459 31.3921V28.3898C98.4148 28.2573 98.2824 28.1248 98.1057 28.1248Z"
            fill="black"
          />
          <path
            d="M31.8778 2.03099L23.5772 14.3494C23.0032 15.1883 24.107 16.2038 24.9018 15.4974L33.0699 8.38889C33.2906 8.21228 33.5997 8.34474 33.5997 8.6538V30.8623C33.5997 31.1713 33.2023 31.3038 33.0257 31.083L8.30058 1.50117C7.50585 0.529825 6.35789 0 5.07749 0H4.19444C1.89854 0 0 1.89854 0 4.2386V35.4982C0 37.8383 1.89854 39.7368 4.2386 39.7368C5.69561 39.7368 7.06433 38.9863 7.85906 37.7058L16.1596 25.3874C16.7336 24.5485 15.6298 23.533 14.8351 24.2395L6.66696 31.3038C6.4462 31.4804 6.13713 31.348 6.13713 31.0389V8.87456C6.13713 8.5655 6.5345 8.43304 6.71111 8.6538L31.4363 38.2357C32.231 39.207 33.4231 39.7368 34.6594 39.7368H35.5424C37.8825 39.7368 39.781 37.8383 39.781 35.4982V4.2386C39.7368 1.89854 37.8383 0 35.4982 0C34.0412 0 32.6725 0.750585 31.8778 2.03099Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_303_311">
            <rect width="151" height="39.7368" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p className="text-2xl font-bold text-gray-900 mt-4">Contract deploy</p>

      <p className="text-center mt-3 text-gray-500">
        Lorem ipsum dolor sit amet. <span className="text-gray-800 font-bold">Turpis sodales volutpat. </span>
        Eu nibh congue.
      </p>

      <p className="text-sm font-semibold text-yellow-400 mt-3">Current ID</p>
      <p className="text-sm font-bold text-gray-900 mt-1">{contractId}</p>

      <form action="" className="w-full">
        <div className="w-full">
          {apiError ? (
            <div className="w-full flex items-center justify-between mt-4">
              <p className="text-red-500 text-xs font-bold">Something went wrong</p>
              <p className="text-yellow-400 text-xs font-bold">Check a ID</p>
            </div>
          ) : null}
          <input
            type="text"
            className={`mt-4 w-full h-10 border-2 border-yellow-400 rounded-md focus:outline-none text-xs ${
              apiError ? 'border-red-500 text-red-500' : 'border-yellow-400'
            } py-3 font-semibold`}
            placeholder="Set your contract ID"
            onChange={handleChange}
            value={inputContract}
          />
        </div>
        <div className="w-full flex items-center justify-between mt-4">
          {inputContract !== contractId ? (
            <button
              onClick={() => setContractId(inputContract)}
              className="mt-5 h-10 p-4 flex items-center justify-center text-sm border-2 border-yellow-400 bg-yellow-400 hover:bg-white hover:text-yellow-400 rounded-md text-gray-800 font-bold transform active:scale-95 duration-200"
            >
              Apply
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={setDefaultContractId}
            className="mt-5 h-10 p-4 flex items-center justify-center text-sm border-2 text-red-500 border-red-500 bg-white hover:bg-red-500 hover:text-white rounded-md font-bold transform active:scale-95 duration-200"
          >
            Reset to default
          </button>
        </div>
      </form>
    </div>
  );
};
