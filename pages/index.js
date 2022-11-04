import Head from "next/head";
import { useEffect } from "react";
import getUsers from "./api/users";
import Login from "./Login";
import Navs from "./Navs";

let num_users = 15;
let per_page = 6;
let view_page = 1;
let total_page = Math.ceil(num_users / per_page);

export default function Home() {
  useEffect(
    () => console.log(getUsers(view_page, per_page, num_users, total_page)),
    []
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="HR Managment app" content="Employee Managment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-[#e3e3e3] h-full w-full">
        <Navs />
        <Login />
      </main>
    </div>
  );
}
