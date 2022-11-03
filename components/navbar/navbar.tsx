import { useRouter } from "next/router";
import NextLink from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pokemon
          </span>
        </a>
        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="flex flex-row p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-400 dark:border-gray-700">
            <li>
              <a
                className={`py-2 pr-4 pl-3 text-black hover:bg-slate-600 p-4 rounded-full dark:text-white ${
                  router.pathname === "/" ? "bg-gray-600 " : ""
                }`}
                aria-current="page"
              >
                <NextLink href="/">Paginated</NextLink>
              </a>
            </li>
            <li>
              <a
                className={`py-2 pr-4 pl-3 text-black hover:bg-gray-600 p-4 rounded-full dark:text-white ${
                  router.pathname === "/lazy"
                    ? "bg-gray-600 p-4 rounded-full"
                    : ""
                }`}
                aria-current="page"
              >
                <NextLink href="/lazy">Lazy Loaded</NextLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
