import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/card/card";
import Pagination from "../components/pagination/pagination";

const PAGE_SIZE = 12;

export default function Home() {

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [query, setQuery] = useState('')
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        console.log(json);
        setCurrentPage(1);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter(p =>
      p.name.includes(query.toLowerCase())
    )
    setFilteredData(filtered)
  }, [query])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const unFiltered = currentTableData.map((data, index) => (
    <Card
      key={index}
      index={index}
      data={data}
      currentPage={currentPage}
      position="pagination"
    />
  ))

  const filtered = filteredData.map((data, index) => (
    <Card
      key={index}
      index={index}
      data={data}
      currentPage={currentPage}
      position="pagination"
    />
  ))

  return (
    <div>
      <form className="m-10">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input onChange={(e) => setQuery(e.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filter Pokemons" required />
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 width-full gap-10 m-10">
        {query !== '' ? filtered : unFiltered}
      </div>
      {query === '' &&
        <Pagination
          className="pagination-bar App"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      }
    </div>
  )
}
