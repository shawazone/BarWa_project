import axios from "axios";
import React, { useState } from "react";
import RegisterForm from "../../components/registerForm";
// import handler from '../api/handler';

const Register = () => {


    // try {
    //   const { data } = await axios.post("./api/handler", {
    //     name,
    //     email,
    //     password,
    //   });

    //   // console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }

    return (
      <div>
        <RegisterForm />
      </div>
    )
 }

export default Register;