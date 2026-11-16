import Header from "./components/Header";
import { series } from "./data/series";
import SeriesList from "C:/Users/fadis/OneDrive/Desktop/react-homework/targil_bait2/series-react/series-react/src/components/SeriesList.jsx";
function App() {
  return(
    <main>
      <Header/>
      <SeriesList series={series}/>
    </main>
  );
}

export default App;