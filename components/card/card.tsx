import React from "react";

interface P {
  key: number;
  currentPage: number;
  index: number;
  data: any;
  position: string;
}

export const Card = ({ key, currentPage, index, data, position }: P) => (
  <div className="card-container" key={key}>
    <div className="max-w-sm bg-gray-400 rounded-lg flex flex-col justify-center items-center border border-gray-200 shadow-md hover:scale-110 transition-all">
      <a href="#">
        <img
          alt="pokemon"
          className="h-[200px] w-[100px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${position == "pagination"
            ? currentPage * 12 - 12 + 1 + index
            : index + 1
            }.svg`}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name.toUpperCase()}</h5>
        </a>
      </div>
    </div>
    <h2></h2>
  </div>
);
