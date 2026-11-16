import SeriesCard from "./SeriesCard";
function SeriesList({series}) {
  return (
    <section className="series-list">
        {series.map(serie=>{
           return<SeriesCard  
                key={serie.id}
                title={serie.title}
                genre={serie.genre}
                startYear={serie.startYear}
                ended={serie.ended}
                creator={serie.creator.name}
                seasons={serie.seasons}
                nextSeason={serie.nextSeason?.year}>
                </SeriesCard>
        })}
    </section>
  );
}

export default SeriesList;