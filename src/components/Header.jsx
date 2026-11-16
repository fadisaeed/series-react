import { platform, series } from "C:/Users/fadis/OneDrive/Desktop/react-homework/targil_bait2/series-react/series-react/src/data/series.js";
function Header() {
  return (
   <header className="header">
  <h1 className="header__logo">{platform}</h1>
  <p className="header__count">{series.length}</p>
</header>
  )
}

export default Header