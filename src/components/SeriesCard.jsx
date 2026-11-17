import { useState } from "react";
import SeasonList from "./SeasonList";
function SeriesCard({title,genre,startYear,creator,ended,nextYear,seasons}) {
  const [saved,issaved]=useState(false);
  const [clicked,isclicked]=useState(false);
  function isitsaved()
    {
       issaved(!saved);
    }
  function isitclicked()
    {
        isclicked(!clicked)
    }
  return (
 <article className={saved===true?"series-card series-card--saved":"series-card"}>
  <div className="series-card__top">
    <h2 className="series-card__title">{title}</h2>
    <span className={ended==true?"badge badge--ended":"badge badge--running"}>{ended==true?"הסתיימה":"משודרת"}</span>
  </div>
  <p className="series-card__meta">{genre} · {startYear} · {creator}</p>
  <p className="series-card__meta">{seasons.length>0?seasons.length + " עונות":"עוד אין עונות"}</p>
  {nextYear!==undefined? <p className="series-card__next">עונה חדשה ב  - {nextYear}</p>:""}

  <div class="series-card__actions">
  <button class="btn" onClick={isitsaved}>{saved==true?"★ שמורה":"☆ לשמור"}</button>
  <button onClick={isitclicked}>{clicked==true?"הסתר פרקים":"הצג פרקים"} </button>
</div>
{clicked==true?<SeasonList seasons={seasons} />:""}
</article>
  )
}
export default SeriesCard