import React from "react";
import Auth from "../../../Components/Auth";

const Register = () => {
  return (
    <Auth
      redirectMardika="/auth/register/mardika"
      redirectDewantaraMuda="/auth/register/dewantara-muda"
      redirectKonselor="/auth/register/konselor"
      description="Sudah punya akun? "
      redirect="/masuk"
      redirectName="Masuk"
    />
  );
};

export default Register;
