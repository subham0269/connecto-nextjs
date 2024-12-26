// import GlobalStyles from "@/styles/GlobalStyles";
import { FC } from "react";
import ArtistContainer from "../UI/Home/CircleContainer";
import EventsContainer from "../UI/Home/EventsContainer";
import OrgContainer from "../UI/Home/OrgContainer";
import NewsLetterJoin from "../UI/Home/Newsletter";

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