'use client';
import { IoCloseCircle, IoHomeOutline } from "react-icons/io5";
import { FaCheckCircle, FaInfo, FaInfoCircle, FaUser } from "react-icons/fa";
import Tooltip from "../Tooltip";
import DatePickerInput from "../DatePickerInput";
import { useState } from "react";
import SelectOptions from "../SelectOptions";

const options = [
  { value: "Pflegegrad 1", label: "Pflegegrad 1" },
  { value: "Pflegegrad 2", label: "Pflegegrad 2" },
  { value: "Pflegegrad 3", label: "Pflegegrad 3" },
  { value: "Pflegegrad 4", label: "Pflegegrad 4" },
  { value: "Pflegegrad 5", label: "Pflegegrad 5" },
];

const genderOptions = [
  { value: "Gender 1", label: "Gender 1" },
  { value: "Gender 2", label: "Gender 2" },
  { value: "Gender 3", label: "Gender 3" },
];

const germanStates: { value: string; label: string }[] = [
  { value: 'baden-wuerttemberg', label: 'Baden-Württemberg' },
  { value: 'bavaria', label: 'Bavaria (Bayern)' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'brandenburg', label: 'Brandenburg' },
  { value: 'bremen', label: 'Bremen' },
  { value: 'hamburg', label: 'Hamburg' },
  { value: 'hesse', label: 'Hesse (Hessen)' },
  { value: 'lower-saxony', label: 'Lower Saxony (Niedersachsen)' },
  { value: 'mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
  { value: 'north-rhine-westphalia', label: 'North Rhine-Westphalia (Nordrhein-Westfalen)' },
  { value: 'rhineland-palatinate', label: 'Rhineland-Palatinate (Rheinland-Pfalz)' },
  { value: 'saarland', label: 'Saarland' },
  { value: 'saxony', label: 'Saxony (Sachsen)' },
  { value: 'saxony-anhalt', label: 'Saxony-Anhalt (Sachsen-Anhalt)' },
  { value: 'schleswig-holstein', label: 'Schleswig-Holstein' },
  { value: 'thuringia', label: 'Thuringia (Thüringen)' },
];

const Dashboard = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [careSince, setCareSince] = useState<Date | null>(new Date());
  const [levelOfCare, setLevelOfCare] = useState<OptionType | null>(null);
  const [federalState, setFederalState] = useState<OptionType | null>(null);
  const [gender, setGender] = useState<OptionType | null>(null);
  const [insurancySource, setInsurancySource] = useState<string>();

  return (
    <section id="senior-profile" className="relative">
      <div className="">
        <div className="flex flex-wrap items-center gap-5">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:gap-7.5">
            {/* Instagram Followers */}
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
              <p className="flex items-center gap-1.5 text-body-sm font-medium">
                <span className="flex items-center gap-1 text-red">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5.643 7.607L9.09 4.255l.909.884L5 10 0 5.139l.909-.884 3.448 3.353V0h1.286v7.607z" />
                  </svg>
                  <span>-1.5%</span>
                </span>
                <span>than last Week</span>
              </p>
            </div>

            {/* Google Ads CPC */}
            <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card sm:p-6 xl:p-7.5">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0002 31.1668C24.8242 31.1668 31.1668 24.8242 31.1668 17.0002C31.1668 9.17613 24.8242 2.8335 17.0002 2.8335C9.17613 2.8335 2.8335 9.17613 2.8335 17.0002C2.8335 24.8242 9.17613 31.1668 17.0002 31.1668ZM18.0627 8.50016C18.0627 7.91336 17.587 7.43766 17.0002 7.43766C16.4134 7.43766 15.9377 7.91336 15.9377 8.50016V8.94887C13.6279 9.36244 11.6877 11.0978 11.6877 13.4585C11.6877 16.1745 14.2558 18.0627 17.0002 18.0627C18.9502 18.0627 20.1877 19.3458 20.1877 20.5418C20.1877 21.7379 18.9502 23.021 17.0002 23.021C15.0501 23.021 13.8127 21.7379 13.8127 20.5418C13.8127 19.955 13.337 19.4793 12.7502 19.4793C12.1634 19.4793 11.6877 19.955 11.6877 20.5418C11.6877 22.9025 13.6279 24.6379 15.9377 25.0515V25.5002C15.9377 26.087 16.4134 26.5627 17.0002 26.5627C17.587 26.5627 18.0627 26.087 18.0627 25.5002V25.0515C20.3724 24.6379 22.3127 22.9025 22.3127 20.5418C22.3127 17.8259 19.7446 15.9377 17.0002 15.9377C15.0501 15.9377 13.8127 14.6545 13.8127 13.4585C13.8127 12.2624 15.0501 10.9793 17.0002 10.9793C18.9502 10.9793 20.1877 12.2624 20.1877 13.4585C20.1877 14.0453 20.6634 14.521 21.2502 14.521C21.837 14.521 22.3127 14.0453 22.3127 13.4585C22.3127 11.0978 20.3724 9.36244 18.0627 8.94887V8.50016Z"
                  fill="#FF9C55"
                />
              </svg>
              <h4 className="mb-2 mt-5 font-medium">Budget 2025 Service 1</h4>
              <h3 className="mb-2 text-heading-6 font-bold text-dark dark:text-white">5.03</h3>
              <p className="flex items-center gap-1.5 text-body-sm font-medium">
                <span className="flex items-center gap-1 text-green">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M4.357 2.393L.91 5.745 0 4.861 5 0l5 4.861-.909.884-3.448-3.353V10H4.357V2.393z" />
                  </svg>
                  <span>+2.6%</span>
                </span>
                <span>than last Week</span>
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              
              {/* --- Card 1 --- */}
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-medium">Created Applicatation form Service 1 current year</p>
                  </div>
                  <div>
                    <IoCloseCircle size={75} color="#ff0000"/>
                  </div>
                </div>
              </div>
              {/* --- Card 2 --- */}
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-medium">Created Applicatation form Service 1 current year</p>
                  </div>

                  <div>
                    <FaCheckCircle size={70} color="#22ad5c"/>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
              
              {/* --- Card 1 --- */}
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  
                  <div>
                    <h3 className="mb-4 text-heading-5 font-bold text-dark dark:text-white">197</h3>
                    <p className="font-medium">QTY of Personal Care</p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex items-center gap-1 rounded-[5px] px-[5px] py-1 text-body-xs font-medium leading-[15px] text-white bg-green">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="currentColor">
                          <path
                            d="M13.0158 5.24707H9.4939C9.2314 5.24707 9.01265 5.46582 9.01265 5.72832C9.01265 5.99082 9.2314 6.20957 9.4939 6.20957H11.6595L8.85953 8.09082C8.75015 8.17832 8.59703 8.17832 8.46578 8.09082L5.57828 6.1877C5.1189 5.88145 4.55015 5.88145 4.09078 6.1877L0.722027 8.44082C0.503277 8.59395 0.437652 8.9002 0.590777 9.11895C0.678277 9.2502 0.831402 9.3377 1.0064 9.3377C1.0939 9.3377 1.20328 9.31582 1.2689 9.2502L4.65953 6.99707C4.7689 6.90957 4.92203 6.90957 5.05328 6.99707L7.94078 8.92207C8.40015 9.22832 8.9689 9.22832 9.42828 8.92207L12.5127 6.84395V9.27207C12.5127 9.53457 12.7314 9.75332 12.9939 9.75332C13.2564 9.75332 13.4752 9.53457 13.4752 9.27207V5.72832C13.5189 5.46582 13.2783 5.24707 13.0158 5.24707Z"
                          ></path>
                        </svg>
                        <span>+2.5%</span>
                      </span>
                      <span className="text-body-sm font-medium">Since last week</span>
                    </div>
                  </div>

                  <div>
                    <svg className="h-17.5 w-17.5 -rotate-90 transform">
                      <circle
                        className="text-stroke dark:text-dark-3"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="35"
                        cy="35"
                      ></circle>
                      <circle
                        className="text-primary"
                        strokeWidth="10"
                        strokeDasharray="188.49555921538757"
                        strokeDashoffset="75.39822368615502"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="35"
                        cy="35"
                      ></circle>
                    </svg>
                  </div>

                </div>
              </div>

              {/* --- Card 2 --- */}
              <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
                <div className="flex items-end justify-between">
                  
                  <div>
                    <h3 className="mb-4 text-heading-5 font-bold text-dark dark:text-white">745</h3>
                    <p className="font-medium">Qty of Selected Worker</p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex items-center gap-1 rounded-[5px] px-[5px] py-1 text-body-xs font-medium leading-[15px] text-white bg-red">
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="currentColor"
                          className="scale-y-[-1]"
                        >
                          <path
                            d="M13.0158 5.24707H9.4939C9.2314 5.24707 9.01265 5.46582 9.01265 5.72832C9.01265 5.99082 9.2314 6.20957 9.4939 6.20957H11.6595L8.85953 8.09082C8.75015 8.17832 8.59703 8.17832 8.46578 8.09082L5.57828 6.1877C5.1189 5.88145 4.55015 5.88145 4.09078 6.1877L0.722027 8.44082C0.503277 8.59395 0.437652 8.9002 0.590777 9.11895C0.678277 9.2502 0.831402 9.3377 1.0064 9.3377C1.0939 9.3377 1.20328 9.31582 1.2689 9.2502L4.65953 6.99707C4.7689 6.90957 4.92203 6.90957 5.05328 6.99707L7.94078 8.92207C8.40015 9.22832 8.9689 9.22832 9.42828 8.92207L12.5127 6.84395V9.27207C12.5127 9.53457 12.7314 9.75332 12.9939 9.75332C13.2564 9.75332 13.4752 9.53457 13.4752 9.27207V5.72832C13.5189 5.46582 13.2783 5.24707 13.0158 5.24707Z"
                          ></path>
                        </svg>
                        <span>-1.5%</span>
                      </span>
                      <span className="text-body-sm font-medium">Since last week</span>
                    </div>
                  </div>

                  <div>
                    <svg className="h-17.5 w-17.5 -rotate-90 transform">
                      <circle
                        className="text-stroke dark:text-dark-3"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="35"
                        cy="35"
                      ></circle>
                      <circle
                        className="text-primary"
                        strokeWidth="10"
                        strokeDasharray="188.49555921538757"
                        strokeDashoffset="131.9468914507713"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="35"
                        cy="35"
                      ></circle>
                    </svg>
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
