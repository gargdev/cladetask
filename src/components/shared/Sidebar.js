import React from "react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex space-x-8">
        <button className="flex items-center justify-center font-medium border-orange-400 border-2 text-orange-500 px-8 py-2 bg-red-100 rounded-md outline-none hover:bg-orange-600 hover:text-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </span>
          Delete Job
        </button>
        <button className="flex items-center justify-center font-medium border-orange-400 border-2 text-orange-500 px-8 py-2 bg-red-100 rounded-md outline-none hover:bg-orange-600 hover:text-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </span>
          Edit Job
        </button>
      </div>
      <div className="flex flex-col items-start px-4 py-4 h-full">
        <div className="flex space-x-20 justify-around">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M18.3334 17.5V15.8333C18.3334 14.2801 17.271 12.9751 15.8334 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43443 15 5.83333C15 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.913 14.5577C13.5746 13.741 12.9257 13.092 12.109 12.7537C11.4964 12.5 10.7198 12.5 9.16669 12.5H6.66669C5.11355 12.5 4.33698 12.5 3.72441 12.7537C2.90765 13.092 2.25874 13.741 1.92042 14.5577C1.66669 15.1703 1.66669 15.9469 1.66669 17.5M11.25 5.83333C11.25 7.67428 9.75764 9.16667 7.91669 9.16667C6.07574 9.16667 4.58335 7.67428 4.58335 5.83333C4.58335 3.99238 6.07574 2.5 7.91669 2.5C9.75764 2.5 11.25 3.99238 11.25 5.83333Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Applicants
          </div>
          <div className="flex items-end">400</div>
        </div>
        <div className="flex space-x-20 justify-around">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M10 12.9167H6.25002C5.08705 12.9167 4.50557 12.9167 4.0324 13.0602C2.96707 13.3834 2.13339 14.217 1.81022 15.2824C1.66669 15.7555 1.66669 16.337 1.66669 17.5M13.3334 15L15 16.6667L18.3334 13.3333M12.0834 6.25C12.0834 8.32107 10.4044 10 8.33335 10C6.26229 10 4.58335 8.32107 4.58335 6.25C4.58335 4.17893 6.26229 2.5 8.33335 2.5C10.4044 2.5 12.0834 4.17893 12.0834 6.25Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Matches
          </div>
          <div className="flex items-end">100</div>
        </div>
        <div className="flex space-x-20 justify-around">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4001 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9001 15 13.5 15H8.06979C7.54975 15 7.28972 15 7.04101 15.051C6.82036 15.0963 6.60683 15.1712 6.40624 15.2737C6.18014 15.3892 5.9771 15.5517 5.57101 15.8765L3.58313 17.4668C3.23639 17.7442 3.06302 17.8829 2.91712 17.8831C2.79022 17.8832 2.67019 17.8255 2.59102 17.7263C2.5 17.6123 2.5 17.3903 2.5 16.9463V6.5Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Messages
          </div>
          <div className="flex items-end">147</div>
        </div>
        <div className="flex space-x-20 justify-around">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81383C1.84654 9.67524 1.90328 9.58539 2.01677 9.40569C2.95461 7.92071 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.92071 17.9839 9.40569C18.0974 9.58539 18.1541 9.67524 18.1859 9.81383C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.50001 10.0003 7.50001C8.61962 7.50001 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Views
          </div>
          <div className="flex items-end">
            800
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
