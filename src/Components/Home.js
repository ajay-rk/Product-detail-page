import React, { useState } from "react";
import ProductData from "./DataSet/ProductData";
import "./Styles/Home.css";

function Home() {
  ;
  const [imageChanger, setimageChanger] = useState(ProductData.colorOptions[0]);
  const [featChanger, setfeatChanger] = useState();

  return (
    <div className="Home">
      <div className="MainPhoto">
        <img src={imageChanger.imageUrl} alt={imageChanger.styleName} />
        {featChanger === "Heart Rate"&& <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 512 512"><path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg> }
        {featChanger === "Heart Rate" && <h2>82</h2>}
        {featChanger === "Time" && <h3 className="Time">7:45</h3>}
      
      </div>

      <div className="details">
        <h1>{ProductData.title}</h1>
        <p>{ProductData.description}</p>
        <h2>Select colour</h2>
        <div className="varPhotos">
          {ProductData.colorOptions.map((colour) => {
            return (
              <img
                src={colour.imageUrl}
                alt={colour.styleName}
                onClick={() => setimageChanger(colour)}
                className= {imageChanger===colour?  "selectedImage" : ""}
              />
            );
          })}
        </div>
        <h2>Select Feature</h2>
        <div>
          {ProductData.featureList.map((feat) => {
            return <button onClick={()=> setfeatChanger(feat)} className= {featChanger===feat? "featButtons":"featButtonDefault"}>{feat}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
