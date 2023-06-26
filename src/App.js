import Introvideo from "./components/Introvideo";
import Section from "./components/Section";
import freshtopicimg from "./assets/academy.png"
import data from "./data/data.json"
import freshtopic2img from "./assets/story.png"
import tedtalksimg from "./assets/in-the-news.gif"
import franchiseimg from "./assets/franchise.gif"
import mapingimg from "./assets/locations.png"
import coursesimg from "./assets/image2.png"
import albumimg from "./assets/mba-cares.gif"
import baratimg from "./assets/image1.png"
import chaiwalaimg from "./assets/image3.png"
import Misc from "./components/misc.jsx";

 
import "./styles/App.scss"
import "./styles/intro.scss"
import "./styles/section.scss"
import "./styles/footer.scss"
import "./styles/misc.scss"
import "./styles/mediaquery.scss"
import Footer from "./components/Footer";





const yellow = "#fff100", pink= "#ed1e79", white= "#fff", brown= "#6d3d0f"
function App() {

  const {freshTopic, freshTopic2, tedTalks, franchise,
           map, courses,album,barat,chaiwala} = data;
  return (
    <>
    <Introvideo/>
    <Section h3={freshTopic.heading} text={freshTopic.text} btntext={freshTopic.btn} imgsrc={freshtopicimg}
      backgroundcolor={pink}
       headingcolor={yellow}
        textcolor={yellow} 
        btnbgcolor={yellow} 
        btncolor={pink}
      />
    <Section h3={freshTopic2.heading} text={freshTopic2.text} btntext={freshTopic2.btn} imgsrc={freshtopic2img}
      backgroundcolor={pink}
       headingcolor={yellow}
        textcolor={yellow} 
        btnbgcolor={yellow} 
        btncolor={pink}
      />
    <Section h3={tedTalks.heading} text={tedTalks.text} btntext={tedTalks.btn} imgsrc={tedtalksimg}
      backgroundcolor={yellow}
       headingcolor={pink}
        textcolor={pink} 
        btnbgcolor={pink} 
        btncolor={yellow}
      />
    <Section h3={franchise.heading} text={franchise.text} btntext={franchise.btn} imgsrc={franchiseimg}
      backgroundcolor={white}
       headingcolor={pink}
        textcolor={brown} 
        btnbgcolor={brown} 
        btncolor={yellow}
      />
    <Section h3={map.heading} text={map.text} imgsrc={mapingimg}
      backgroundcolor={pink}
       headingcolor={yellow} 
       textcolor={yellow}
        btnbgcolor={brown} 
        btncolor={yellow}
        hasbtn={false}
      />
    <Section h3={courses.heading} text={courses.text} btntext={courses.btn} imgsrc={coursesimg}
      imgsize="30%"
      backgroundcolor={yellow}
       headingcolor={pink} 
       textcolor={pink}
        btnbgcolor={pink} 
        btncolor={yellow}
      
      />
    <Section h3={album.heading} text={album.text} btntext={album.btn} imgsrc={albumimg}
      imgsize="30%"
      backgroundcolor={white}
       headingcolor={brown} 
       textcolor={pink}
        btnbgcolor={brown} 
        btncolor={yellow}
      
      />
    <Section h3={barat.heading} text={barat.text} btntext={barat.btn} imgsrc={baratimg}
    
      backgroundcolor={pink}
       headingcolor={yellow} 
       textcolor={yellow}
        btnbgcolor={yellow} 
        btncolor={pink}
      
      />
    <Section h3={chaiwala.heading} text={chaiwala.text} btntext={chaiwala.btn} imgsrc={chaiwalaimg}
      imgsize="30%"
      backgroundcolor={white}
       headingcolor={pink} 
       textcolor={brown}
        btnbgcolor={brown} 
        btncolor={yellow}
      
      />
     

    <Footer/>
    <Misc/>
    <button

style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
      
      }}
  type="button"
  class="btn btn-danger btn-floating btn-lg"
  id="btn-back-to-top"
  >
 <i class="fas fa-arrow-up"></i>
</button>
    </>
  );
}

export default App;
