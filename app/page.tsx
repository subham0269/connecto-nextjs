// import GlobalStyles from "@/styles/GlobalStyles";
import ArtistContainer from "./Components/Home/CircleContainer";
import EventsContainer from "./Components/Home/EventsContainer";
import OrgContainer from "./Components/Home/OrgContainer";

import { artistTestList } from '@/app/tests';

// import Navbar from "./Components/Nav";

export default function Home() {

  // console.log(artistTestList, eventsTestList);
  
  return (
    <>
      <div className="max-w-[1260px] px-12 mx-auto space-y-8">
        <ArtistContainer heading="Top Artists" url='/artists' list={artistTestList} />
        <EventsContainer />
        <OrgContainer />
      </div>
      {/* </GlobalStyles> */}
    </>
  );
}