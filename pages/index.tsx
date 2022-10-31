import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/card/card";
import Pagination from "../components/pagination/pagination";

const PAGE_SIZE = 12;

export default function Home() {

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        console.log(json);
        setCurrentPage(1);
      });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-4 width-full gap-10 m-10">
        {currentTableData.map((data, index) => (
          <Card
            key={index}
            index={index}
            data={data}
            currentPage={currentPage}
            position="pagination"
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar App"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  )
}
