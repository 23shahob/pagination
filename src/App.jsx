import React, { useState } from "react";
import "./App.css";
import { productList } from "./db/data";

const App = () => {
  let count = 0;
  const [data, setData] = useState(count);
  const one = productList.slice(0, 10);
  const two = productList.slice(10, 20);
  const three = productList.slice(20, 30);
  const four = productList.slice(30, 40);
  const five = productList.slice(40, 50);
  const six = productList.slice(50, 60);
  const seven = productList.slice(60, 70);
  const eight = productList.slice(70, 80);
  const nine = productList.slice(80, 90);
  const ten = productList.slice(90, 100);

  return (
    <div>
      <div className="container mx-auto mt-5 px-5">
        {data === count && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {one.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 1 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {two.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 2 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {three.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 3 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {four.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 4 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {five.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 5 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {six.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 6 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {seven.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 7 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {eight.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 8 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {nine.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
        {data === count + 9 && (
          <div className="mb-12 grid grid-cols-5 gap-5">
            {ten.map((product) => (
              <div className="w-[280px] rounded-md border border-blue-500 p-4">
                <img
                  className="h-40 w-full rounded-lg"
                  src={product.img}
                  alt="Image"
                />
                <h1 className="p-2 font-semibold">{product.title}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center gap-1">
        <button
          onClick={() => {
            setData(count);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          1
        </button>
        <button
          onClick={() => {
            setData(count + 1);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          2
        </button>
        <button
          onClick={() => {
            setData(count + 2);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          3
        </button>
        <button
          onClick={() => {
            setData(count + 3);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          4
        </button>
        <button
          onClick={() => {
            setData(count + 4);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          5
        </button>
        <button
          onClick={() => {
            setData(count + 5);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          6
        </button>
        <button
          onClick={() => {
            setData(count + 6);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          7
        </button>
        <button
          onClick={() => {
            setData(count + 7);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          8
        </button>
        <button
          onClick={() => {
            setData(count + 8);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          9
        </button>
        <button
          onClick={() => {
            setData(count + 9);
          }}
          className="rounded-md border bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
        >
          10
        </button>
      </div>
    </div>
  );
};

export default App;
