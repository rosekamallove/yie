import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/card/card";
import Pagination from "../components/pagination/pagination";

const PAGE_SIZE = 12;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        setCurrentPage(1);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((p) => p.name.includes(query.toLowerCase()));
    setFilteredData(filtered);
  }, [query]);

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
  ));

  const filtered = filteredData.map((data, index) => (
    <Card
      key={index}
      index={index}
      data={data}
      currentPage={currentPage}
      position="pagination"
    />
  ));

  return (
    <div>
      <form className="m-10">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <div className="relative">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Filter Pokemons"
            required
          />
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 width-full gap-10 m-10">
        {query !== "" ? filtered : unFiltered}
      </div>
      {query === "" && (
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
