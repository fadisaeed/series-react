import Header from "./components/Header";
import SeriesCard from "./components/SeriesCard";
import { platform, series } from "C:/Users/fadis/OneDrive/Desktop/react-homework/targil_bait2/series-react/series-react/src/data/series.js";

function App() {
  return(
    <main>
      <Header/>
    <SeriesCard title="Code Red" genre="Thriller" startYear={2020} creator="Noam Shalev" ended={true} nextYear={undefined} seasons={series[2].seasons} />
    
    </main>
  );
}

export default App;