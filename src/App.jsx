import Header from "./components/Header";
import { series } from "./data/series";
import { useState } from "react";
import SeriesList from "C:/Users/fadis/OneDrive/Desktop/react-homework/targil_bait2/series-react/series-react/src/components/SeriesList.jsx";
function App() {
  const [sortclick,sortclicked]=useState(false);
  const [airedclick,airedclicked]=useState(false);
  function issortclicked()
  {
    sortclicked(!sortclick);
  }
  function isairedclicked()
  {
    airedclicked(!airedclick);
  }
  const seriesToSort=[...series];
  const sorting=()=>seriesToSort.sort((a,b)=>a.startYear-b.startYear);
  const AiredSeries=[...series];
  const aired=()=>AiredSeries.filter(serie=>serie.ended==false);
  let displayedSeries = [...series];

  if (airedclick == true) {
    displayedSeries = aired(displayedSeries);
  }

  if (sortclick == true) {
    displayedSeries = sorting(displayedSeries);
  }
  return(
    <main>
      <div class="toolbar">
          <button className={airedclick==true?"btn btn--active":"btn"} onClick={isairedclicked}>רק סדרות משודרות</button>
          <button className={sortclick==true?"btn btn--active":"btn"} onClick={issortclicked}>מיון לפי שנה</button>
      </div>
            <Header/>
             <h2>הסדרות ({displayedSeries.length})</h2>
            <SeriesList series={displayedSeries}/>
     
    </main>
  );
}

export default App;