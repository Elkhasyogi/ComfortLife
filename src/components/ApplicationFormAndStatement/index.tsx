import { IoCheckmarkCircle, IoCloseCircle, IoPersonCircle, IoPersonCircleSharp, IoPersonSharp } from "react-icons/io5";
import { FaCheckCircle, FaHandshake, FaHandshakeSlash, FaHeart, FaPersonBooth, FaRegHandshake } from "react-icons/fa";
import { InvoiceTable } from "./invoice-table";

const ApplicationFormAndStatement = () => {
  return (
    <section id="senior-profile" className="relative">
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
                      <div className="invisible">

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
                              Vorname / First Name / Nama depan 
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
      </div>
    </section>
  );
};

export default ApplicationFormAndStatement;
