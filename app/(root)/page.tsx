// import GlobalStyles from "@/styles/GlobalStyles";
import { FC } from "react";
import ArtistContainer from "../Components/Home/CircleContainer";
import EventsContainer from "../Components/Home/EventsContainer";
import OrgContainer from "../Components/Home/OrgContainer";
import NewsLetterJoin from "../Components/Home/Newsletter";

// import Navbar from "./Components/Nav";

const Page:FC = async () => {

  // await new Promise(res => setTimeout(res, 4000))
  
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto space-y-8">
        <ArtistContainer heading="Top Artists" url='/artists' />
        <EventsContainer />
        <OrgContainer />
        <EventsContainer />
        <NewsLetterJoin />
      </div>
      {/* </GlobalStyles> */}
    </>
  );
}

export default Page;