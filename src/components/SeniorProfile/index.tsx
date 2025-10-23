const SeniorProfile = () => {
  return (
    <section id="senior-profile" className="relative py-10">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <div className="w-full">
                  <div
                    className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                    data-wow-delay=".2s
                    "
                  >
                    <h3 className="mb-8 text-2xl text-center font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                      Daten Klient / Data Base Senior / Data dasar Senior
                    </h3>
                    <form>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="fullName"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                          Vorname / First Name / Nama depan
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Adam"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="sureName"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                          Nachname / Surname / Nama belakang
                        </label>
                        <input
                          type="text"
                          name="sureName"
                          placeholder="Gelius"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="street"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Straße / Street / Jalan
                        </label>
                        <input
                          type="text"
                          name="street"
                          placeholder="Goethestraße 12"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="postCode"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         PLZ / Postcode / Kode pos
                        </label>
                        <input
                          type="text"
                          name="postCode"
                          placeholder="80336"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="city"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Ort / City / Kota
                        </label>
                        <input
                          type="text"
                          name="city"
                          placeholder="München"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="birthDate"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Geburtsdatum / Birthdate / Tanggal Lahir
                        </label>
                        <input
                          type="text"
                          name="birthDate"
                          placeholder="2000/12/12"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="insuranceNumber"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Versicherungen Nr. / Health Insurancy Number / Nomor Asuransi Kesehatan
                        </label>
                        <input
                          type="text"
                          name="insuranceNumber"
                          placeholder="Versicherungen Nr. / Health Insurancy Number / Nomor Asuransi Kesehatan"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="levelOfCare"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Pflegegrad / Level of Care / Tingkat perawatan
                        </label>
                        <input
                          type="text"
                          name="levelOfCare"
                          placeholder="Pflegegrad / Level of Care / Tingkat perawatan"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="levelOfCaresince"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                         Pflegegrad seit / Level of Care Since / Tingkat perawatan sejak
                        </label>
                        <input
                          type="text"
                          name="levelOfCaresince"
                          placeholder="Pflegegrad seit / Level of Care Since / Tingkat perawatan sejak"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="emailAddress"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                          Telefon Nr. / Phone Number / Nomor telepon
                        </label>
                        <input
                          type="text"
                          name="emailAddress"
                          placeholder="Telefon Nr. / Phone Number / Nomor telepon"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="responsibleInsurancy"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                          Zuständige Pflegekasse / Responsible Insurancy / Asuransi kesehatan yang bertanggung jawab
                        </label>
                        <input
                          type="text"
                          name="responsibleInsurancy"
                          placeholder="Zuständige Pflegekasse / Responsible Insurancy / Asuransi kesehatan yang bertanggung jawab"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-[22px]">
                        <label
                          htmlFor="federalState"
                          className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                          Bundesland / Federal State / Negara bagian
                        </label>
                        <input
                          type="text"
                          name="federalState"
                          placeholder="Bundesland / Federal State / Negara bagian"
                          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                      </div>
                      <div className="mb-0">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                        >
                          Submit
                        </button>
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

export default SeniorProfile;
