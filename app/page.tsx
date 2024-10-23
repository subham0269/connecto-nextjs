'use client'

import GlobalStyles from "@/styles/GlobalStyles";
import ArtistContainer from "./Components/Home/ArtistContainer";

// import Navbar from "./Components/Nav";

export default function Home() {
  return (
    <>
      <GlobalStyles>
        <ArtistContainer />
      </GlobalStyles>
    </>
  );
}