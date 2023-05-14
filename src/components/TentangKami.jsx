import { Fragment } from "react";
import { PropTypes } from "prop-types";

const CardTentangKami = ({ slogan, title, paragraf }) => {
  return (
    <Fragment>
      <div className={"text-center mb-2"}>
        <span className={"text-orange-400 text-lg font-bold"}>{slogan}</span>
      </div>
      <h1 className={"text-center text-xl font-bold text-slate-600 mb-4"}>
        {title}
      </h1>
      <p className={"text-justify"}>{paragraf}</p>
    </Fragment>
  );
};
CardTentangKami.propTypes = {
  slogan: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraf: PropTypes.string.isRequired,
};

const TentangKami = () => {
  return (
    <div className={"w-full min-h-min pb-16"}>
      <div className={"container px-8 mx-auto"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12"}>
          <div className={"col-span-1"}>
            <CardTentangKami
              slogan={"-- Pilih Disini --"}
              title={"Kenapa Harus Disini?"}
              paragraf={
                "Karena anda bisa memilih semua jenis makanan dengan harga terjangkau dan sesuai dengan kantong anda, tidak akan membuat anda kepikiran berapa jumlah yang harus dibayar dan tidak akan frustasi jika membeli makanan beserta snack yang cukup banyak ehe"
              }
            />
          </div>
          <div className={"col-span-1"}>
            <CardTentangKami
              slogan={"-- Harus Disini --"}
              title={"Kenapa Tidak Tempat Lain?"}
              paragraf={
                "Disini anda bisa menikmati makanan dan minuman dengan musik yang akan dibawakan oleh band yang telah kami sediakan, anda bisa request musik kesukaan kalian dan anda bisa menyanyi bersama pasangan, romantis dengan pasangan agar pasangan anda semakin jatuh cinta ehe"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
