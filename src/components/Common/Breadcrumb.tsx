import Link from 'next/link';

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <div className="relative z-10 overflow-hidden pb-[30px] pt-[90px] dark:bg-dark md:pt-[90px] lg:pt-[90px]">
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-4 font-bold text-dark dark:text-white md:leading-[1.2]">
                  {pageName}
                </h1>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  {pageDescription}
                </p>

                <ul className="flex items-center justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="flex items-center gap-[10px] text-base font-medium text-body-color">
                      <span className="text-body-color dark:text-dark-6">
                        {' '}
                        /{' '}
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
