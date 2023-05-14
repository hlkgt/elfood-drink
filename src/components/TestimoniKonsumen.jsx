import imageUser from "../../public/hero-image.jpg";

const CardTestimoni = () => {
  return (
    <div
      className={
        "w-full rounded-xl cursor-pointer hover:translate-y-3 transition-transform duration-300 ease-in-out hover:bg-teal-400 shadow-lg border-2 border-slate-400 p-8 flex flex-col gap-8 hover:text-white"
      }
    >
      <div className={"w-full h-8 flex justify-start items-center gap-8"}>
        <img
          src={imageUser}
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

const TestimoniKonsumen = () => {
  return (
    <div className="container px-8 mx-auto pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className={"text-center mb-2"}>
            <span className={"text-orange-400 text-lg font-bold"}>
              -- Ulasan Consumen --
            </span>
          </div>
          <h1 className={"text-center text-xl font-bold text-slate-600"}>
            Ini Kata Mereka
          </h1>
          <p className={"text-center text-md"}>
            Beberapa Ulasan Dari Konsumen Yang Puas Dengan Pelayanan Ataupun
            Makanan Yang Disediakan
          </p>
        </div>
        <div className={"col-span-1"}>
          <CardTestimoni />
        </div>
        <div className={"col-span-1"}>
          <CardTestimoni />
        </div>
        <div
          className={
            "col-span-1 md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          }
        >
          <CardTestimoni />
        </div>
      </div>
    </div>
  );
};

export default TestimoniKonsumen;
