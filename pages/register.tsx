import Head from "next/head";
import User from "../User/user";
import axios from "axios";
import { useState } from "react";

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const url = "http://localhost:3000/api/user/create";

  const register = async(event: any) => {
    event.preventDefault();

    const registerUser: User = {
      username,
      password
    };

    try {
      const res = await axios.post(url, registerUser);
      console.log("Post success", res.data);

    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="container-fluid">
      <Head>
        <title> FordaStore </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <img src="logo.png"
        className="img-thumbnail w-25 h-25 border border-white"
        alt="logo.png"
      />

      <div className="row">
        <div className="col-sm-6 col-md-5 m-auto">
          
          <div className="d-flex justify-content-center">
            <img src="user-icon.png"
              className="img-thumbnail border border-white w-24 h-24"
              alt="user-icon.png"
            />
          </div>

          <div className="fs-1 d-flex justify-content-center fw-bold">
            Register
          </div>

          <form onSubmit={register}>
            <div>
              <input
                className="form-control mt-5 border border-dark"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input
                className="form-control mt-4 border border-dark"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-info mt-5 w-100 border border-dark">
                  Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
