'use client';
import { IoCheckmarkCircle, IoCloseCircle, IoPersonCircle, IoPersonCircleSharp, IoPersonSharp } from "react-icons/io5";
import { FaCheckCircle, FaHandshake, FaHandshakeSlash, FaHeart, FaPersonBooth, FaRegHandshake } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section id="senior-profile" className="relative">
      <div className="">
        <div className="flex flex-wrap items-center gap-5">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:gap-7.5">
            <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card sm:p-6 xl:p-7.5">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="currentColor">
                <circle cx="12.7514" cy="8.50016" r="5.66667" fill="#0EB8FA" />
                <ellipse cx="12.7514" cy="24.0846" rx="9.91667" ry="5.66667" fill="#0EB8FA" />
                <path
                  d="M29.7494 24.0839C29.7494 26.4311 26.8657 28.3339 23.3449 28.3339C24.3822 27.2001 25.0955 25.7769 25.0955 24.0859C25.0955 22.3929 24.3806 20.9684 23.3413 19.834C26.8621 19.834 29.7494 21.7367 29.7494 24.0839Z"
                  fill="#0EB8FA"
                />
                <path
                  d="M25.4994 8.50098C25.4994 10.8482 23.5966 12.751 21.2494 12.751C20.7376 12.751 20.2469 12.6605 19.7925 12.4947C20.4627 11.3159 20.8455 9.95234 20.8455 8.49939C20.8455 7.04753 20.4633 5.68493 19.794 4.50673C20.248 4.34125 20.7382 4.25098 21.2494 4.25098C23.5966 4.25098 25.4994 6.15377 25.4994 8.50098Z"
                  fill="#0EB8FA"
                />
              </svg>
              <h4 className="mb-2 mt-5 font-medium">Budget 2025 Service 1</h4>
              <h3 className="mb-2 text-heading-6 font-bold text-dark dark:text-white">522K</h3>
            </div>
            <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card sm:p-6 xl:p-7.5">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0002 31.1668C24.8242 31.1668 31.1668 24.8242 31.1668 17.0002C31.1668 9.17613 24.8242 2.8335 17.0002 2.8335C9.17613 2.8335 2.8335 9.17613 2.8335 17.0002C2.8335 24.8242 9.17613 31.1668 17.0002 31.1668ZM18.0627 8.50016C18.0627 7.91336 17.587 7.43766 17.0002 7.43766C16.4134 7.43766 15.9377 7.91336 15.9377 8.50016V8.94887C13.6279 9.36244 11.6877 11.0978 11.6877 13.4585C11.6877 16.1745 14.2558 18.0627 17.0002 18.0627C18.9502 18.0627 20.1877 19.3458 20.1877 20.5418C20.1877 21.7379 18.9502 23.021 17.0002 23.021C15.0501 23.021 13.8127 21.7379 13.8127 20.5418C13.8127 19.955 13.337 19.4793 12.7502 19.4793C12.1634 19.4793 11.6877 19.955 11.6877 20.5418C11.6877 22.9025 13.6279 24.6379 15.9377 25.0515V25.5002C15.9377 26.087 16.4134 26.5627 17.0002 26.5627C17.587 26.5627 18.0627 26.087 18.0627 25.5002V25.0515C20.3724 24.6379 22.3127 22.9025 22.3127 20.5418C22.3127 17.8259 19.7446 15.9377 17.0002 15.9377C15.0501 15.9377 13.8127 14.6545 13.8127 13.4585C13.8127 12.2624 15.0501 10.9793 17.0002 10.9793C18.9502 10.9793 20.1877 12.2624 20.1877 13.4585C20.1877 14.0453 20.6634 14.521 21.2502 14.521C21.837 14.521 22.3127 14.0453 22.3127 13.4585C22.3127 11.0978 20.3724 9.36244 18.0627 8.94887V8.50016Z"
                  fill="#FF9C55"
                />
              </svg>
              <h4 className="mb-2 mt-5 font-medium">Budget 2025 Service 2</h4>
              <h3 className="mb-2 text-heading-6 font-bold text-dark dark:text-white">100K</h3>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-center justify-center flex-col gap-5">
                  <div>
                    <p className="font-medium">Created Applicatation form Service 1 current year</p>
                  </div>
                  <div>
                    <IoCloseCircle size={70} color="#fd853a"/>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-center justify-center flex-col gap-5">
                  <div>
                    <p className="font-medium">Created Applicatation form Service 1 current year</p>
                  </div>
                  <div>
                    <IoCheckmarkCircle size={70} color="#22ad5c"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="mb-4 text-heading-5 font-bold text-dark dark:text-white">197</h3>
                    <p className="font-medium">QTY of Personal Care</p>
                  </div>
                  <div>
                    <FaHeart color="#ff0000" size={30}/>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="mb-4 text-heading-5 font-bold text-dark dark:text-white">745</h3>
                    <p className="font-medium">Qty of Selected Worker</p>
                  </div>
                  <div>
                    <FaHandshake color={'#5750f1'} size={30}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
