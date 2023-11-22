import React from "react";
import CoverPage from "../Components/CoverPage";
import Templates from "../Components/Templates";
// import Footer from "../Components/Footer";

function LoginPage() {
  return (
    <>
      <CoverPage/>
      <Templates 
        title="Enjoy on your TV"
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
      />
      <Templates
        title="Download your shows to watch offline"
        text="Save your favourites easily and always have something to watch."
        thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        video={false}
      />
      <Templates
        title="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
      />
      <Templates
        title="Create profiles for kids"
        text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        thumbnail="https://occ-0-4258-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        video={false}
      />
      {/* <Footer /> */}
    </>
  );
}

export default LoginPage;
