import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageTestimoni from "../assets/hero-image.jpg";

const CardTestimoni = () => {
  return (
    <div
      className={
        "w-full rounded-xl cursor-pointer hover:translate-y-3 transition-transform duration-300 ease-in-out hover:bg-teal-400 shadow-lg border-2 border-slate-400 p-8 flex flex-col gap-8 hover:text-white"
      }
    >
      <div className={"w-full h-8 flex justify-start items-center gap-8"}>
        <img
          src={imageTestimoni}
          alt="image-user"
          className={"rounded-full w-16 h-16"}
        />
        <div className="flex flex-col">
          <h1 className={"text-lg font-semibold"}>Nama Saya</h1>
          <p>Jenis Makanan : Kentang</p>
        </div>
      </div>
      <p className={"text-justify"}>
        Kentang Goreng sih wajib banget buat dibeli soalnya itu rasanya gurih,
        isinya banyak, saosnya gak pelit recomende deh, jangan lupa beli yaaa
      </p>
    </div>
  );
};

const Testimoni = () => {
  return (
    <Fragment>
      <Navbar />
      <div
        className={
          "container mx-auto px-8 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        }
      >
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
        <CardTestimoni />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Testimoni;
