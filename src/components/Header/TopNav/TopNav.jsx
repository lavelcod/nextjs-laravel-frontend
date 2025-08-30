import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function TopNav() {
  return (
    <>
      <div className="bg-slate-600">
        <div className="container flex items-center justify-between h-[44px]">
          <div className="left-block flex items-center">
            <div className="location flex items-center max-lg:hidden">
              <Icon.MapPin className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                160 Boradway 12th floor, New York
              </span>
            </div>
            <div className="mail lg:ml-7 flex items-center">
              <Icon.Envelope className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                Support@lavelcod.ir
              </span>
            </div>
          </div>
          <div className="right-block flex items-center gap-5">
            <div className="line h-6 w-px bg-grey max-sm:hidden"></div>
            <div className="flex items-center gap-2.5 max-sm:hidden list-social">
              <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" target="_blank" href="https://facebook.com/">
                <i className="icon-facebook text-sm"></i> 
              </Link>
              <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" target="_blank" href="https://linkendin.com/">
                <i className="icon-in text-sm"></i> 
              </Link>
              <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" target="_blank" href="https://twitter.com/">
                <i className="icon-twitter text-sm"></i> 
              </Link>
              <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" target="_blank" href="https://instagram.com/">
                <i className="icon-insta text-sm"></i> 
              </Link>
              <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" target="_blank" href="https://youtube.com/">
                <i className="icon-youtube text-[10px]"></i> 
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
