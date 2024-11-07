const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-10 grid place-items-center">
        <div
          id="container"
          className="w-11/12 max-w-5xl flex flex-row gap-6 items-center justify-between max-[640px]:flex-col"
        >
          <header className="flex flex-col gap-6 items-center sm:items-start">
            <img src="../public/images/logo.svg" alt="" className="max-w-36" />

            <ul className="sm:text-sm text-center flex-col gap-4 sm:flex-row sm:gap-8 flex relative font-normal [&_li>a]:relative [&_li>a]:after:absolute [&_li>a]:after:content-[''] [&_li>a]:after:scale-x-0 [&_li>a]:after:-bottom-1 [&_li>a]:after:h-[1px] [&_li>a]:after:bg-white [&_li>a]:after:left-0 [&_li>a]:after:right-0 [&_li>a]:after:transition-all [&_li>a]:after:duration-200 [&_li>a]:after:origin-center">
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  Support
                </a>
              </li>
            </ul>
          </header>

          <div className="flex flex-col gap-6 items-center sm:items-end">
            <ul className="sm:text-sm text-center gap-4 flex relative font-normal [&_li>a]:relative [&_li>a]:after:absolute [&_li>a]:after:content-[''] [&_li>a]:after:scale-x-0 [&_li>a]:after:-bottom-1 [&_li>a]:after:h-[1px] [&_li>a]:after:bg-white [&_li>a]:after:left-0 [&_li>a]:after:right-0 [&_li>a]:after:transition-all [&_li>a]:after:duration-200 [&_li>a]:after:origin-center">
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  <img
                    src="../public/images/icon-facebook.svg"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  <img
                    src="../public/images/icon-instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  <img
                    src="../public/images/icon-pinterest.svg"
                    alt="pinterest"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:after:scale-x-100">
                  <img src="../public/images/icon-twitter.svg" alt="twitter" />
                </a>
              </li>
            </ul>
            <p className="text-gray-400 text-center">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
