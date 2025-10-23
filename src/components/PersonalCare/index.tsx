'use client';
import { IoHomeOutline } from "react-icons/io5";
import { FaInfo, FaInfoCircle, FaUser } from "react-icons/fa";
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

const PersonalCare = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [careSince, setCareSince] = useState<Date | null>(new Date());
  const [levelOfCare, setLevelOfCare] = useState<OptionType | null>(null);
  const [federalState, setFederalState] = useState<OptionType | null>(null);
  const [gender, setGender] = useState<OptionType | null>(null);
  const [insurancySource, setInsurancySource] = useState<string>();

  return (
    <section id="senior-profile" className="relative">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <div className="w-full">
                  <div
                    className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                    data-wow-delay=".2s
                    ">
                    <div className="flex justify-between items-center mb-8 ">
                      <h3 className="text-center text-2xl font-semibold text-dark dark:text-white md:text-[20px] md:leading-[1.42] flex items-center">
                        Daten persönliche Pflegekraft / Data Personal Caregiver
                      </h3>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90">
                          Save
                        </button>
                      </div>
                    </div>
                    <form>                      
                      <div className="mb-[22px]">
                        <label
                          htmlFor="fullName"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6">
                          Vorname / First Name / Nama depan <Tooltip text="The first name is necassary for A and B"><FaInfoCircle className="inline"/></Tooltip>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="sureName"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6">
                          Nachname / Surname / Nama belakang
                        </label>
                        <input
                          type="text"
                          name="sureName"
                          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="street"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6">
                          Straße / Street / Jalan
                        </label>
                        <input
                          type="text"
                          name="street"
                          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="postCode"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6">
                          PLZ / Postcode / Kode pos
                        </label>
                        <input
                          type="text"
                          name="postCode"
                          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="city"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6">
                          Ort / City / Kota
                        </label>
                        <input
                          type="text"
                          name="city"
                          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </form>
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

export default PersonalCare;
