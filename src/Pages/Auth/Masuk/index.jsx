import React from "react";
import Auth from "../../../Components/Auth";

const Masuk = () => {
  return (
    <Auth
      redirectMardika="/auth/masuk/mardika"
      redirectDewantaraMuda="/auth/masuk/dewantara-muda"
      redirectKonselor="/auth/masuk/konselor"
      description="Sudah punya akun? "
      redirect="/masuk"
      redirectName="Masuk"
    />
  );
};

export default Masuk;
