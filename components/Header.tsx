import Image from "next/image";
import logo from "@/app/public/logo.png"
import Navbar from "./Navbar";
import Button from "./Button";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let message = user ? user.email : "Login";
  let arrowClass = user ? " text-xs" : "hidden text-xs";
  let buttonClass = user ? 'hidden' : '';

  return (
    <div className="bg-indigo-800 w-full flex px-4 2xl:px-80 drop-shadow-lg bg-opacity-75 sticky top-0 z-50">
      <div className="w-full flex flex-row justify-between py-4">
        
        <div className="basis-1/4">
          <Image
            src={logo}
            alt="Logo"
            width="68"
            height="56"
          />
        </div>

        <div className="hidden md:flex flex-wrap content-center basis-1/2 justify-center ">
          <Navbar />
        </div>

        <div className="flex flex-row flex-wrap basis-1/4 justify-end">
          
          <div className="flex flex-row flex-wrap content-center text-white text-opacity-75 transition-all ease-in-out hover:text-opacity-100 cursor-pointer">
            <h1 className="px-4">{message}<span className={arrowClass}> ▼</span></h1>
          </div>
          <div className={buttonClass}>
            <Button 
              text="Get Started" 
              disabled={false} 
              border={true} 
              link="/login"
            />  
          </div>
          
        </div>

      </div>
    </div>
  );
}
