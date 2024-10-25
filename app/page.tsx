'use client'

import GlobalStyles from "@/styles/GlobalStyles";
import ArtistContainer from "./Components/Home/ArtistContainer";

// import Navbar from "./Components/Nav";

export default function Home() {
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto">
        <ArtistContainer />
      </div>
      {/* </GlobalStyles> */}
    </>
  );
}