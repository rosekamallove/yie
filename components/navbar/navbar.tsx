
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Pokemon</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-400 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-black bg-gray-400 rounded md:bg-transparent md:text-blue-699 md:p-0 dark:text-white" aria-current="page">Paginated</a>
              <a href="lazy" className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-699 md:p-0 dark:text-white" aria-current="page">Lazy Loaded</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
