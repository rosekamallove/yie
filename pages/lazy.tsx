import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../components/card/card";
import useOnScreen from "../components/scroll/scroll";

export default function HomepageScroll() {
  const [data, setData] = useState<any>([]);
  const [call, setCall] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${call * 12}`)
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json?.results]);
        setCall(call + 1);
      });
  }, []);

  const getMorePost = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${call * 12}`)
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json?.results]);
        setCall(call + 1);
      });
  }


  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={getMorePost}
        hasMore={true}
        loader={<h3>Loading...</h3>}
        endMessage={<h3>Loading...</h3>}
      >
        <div className="grid grid-cols-4 width-full gap-10 m-10">
          {data.map((data: any, index: number) => (
            <Card currentPage={1} key={index} index={index} data={data} position="scroll" />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

