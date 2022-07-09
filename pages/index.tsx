import React from "react";
import { Button } from "../src/components/atoms";
import Layout from "../src/components/organisms/Layouts";

const penyewa = [
  {
    name: "Rizki",
    telepon: "081234567890",
  },
  {
    name: "Rahman",
    telepon: "081234567890",
  },
];

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="p-5 rounded-md mx-1">
        <div
          className="flex justify-between flex-col md:flex-row
        
         px-3 items-center mb-4"
        >
          <p className="text-xl text-slate-900 mb-5">Data Penyewa</p>
          <input
            placeholder="search anything..."
            type="search"
            className="p-2 rounded-full border-2 border-slate-500"
          />
        </div>
        <div>
          {penyewa.map((item, index) => {
            return (
              <Row
                key={index}
                name={item.name}
                telp={item.telepon}
                number={(index + 1).toString()}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

const Row = (props: { name: string; telp: string; number: string }) => {
  return (
    <div className="bg-slate-800 text-white shadow-md rounded-md p-5 px-10 mb-3 md:flex justify-between items-center flex-col md:flex-row">
      <p className="mb-3">{props.number}.</p>
      <p className="mb-3">
        <span className="md:hidden">Nama : </span>
        {props.name}
      </p>
      <p className="mb-3">
        <span className="md:hidden">Telpon : </span>
        {props.telp}
      </p>
      <div>
        <Button title="Edit" css="bg-orange-600 mr-3" />
        <Button title="Hapus" css="bg-red-600" />
      </div>
    </div>
  );
};
