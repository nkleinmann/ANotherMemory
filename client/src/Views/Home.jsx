import React from "react";
import Title from "../Components/HomeComponents/title";
import Buttons from "../Components/HomeComponents/buttons";
import Blurb from "../Components/HomeComponents/blurb";
import Footer from "../Components/layout/footer";
import Navigation from "../Components/layout/navigation";
import paint1 from "../Assets/paint1.jpg";

function Home() {
  return (
    <>
      <Navigation />
      <div
        style={{
          backgroundImage: `url(${paint1})`,
          height: "100%",
        }}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="0.5" d="M0,192L60,165.3C120,139,240,85,360,96C480,107,600,181,720,186.7C840,192,960,128,1080,90.7C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
        <Title />
        <Blurb />
        <Buttons />
        <Footer />
      </div>

    </>
  );
}

export default Home;
