import EpisodeItem from "./EpisodeItem.jsx";

function SeasonList({seasons}) {
  if(seasons.length === 0)
    return <p className="empty">לסדרה הזאת עוד אין פרקים</p>
  return (
    <div className="season-list">
      {seasons.length &&
        seasons.map(season => (
          <div className="season" key={season.number}>
            <h3 className="season__title">
              עונה {season.number} · {season.episodes.length} פרקים
            </h3>
            <ul className="episode-list">
              {season.episodes.map(episode => (
                <EpisodeItem
                  key={episode.id}
                  title={episode.title}
                  rating={episode.rating}
                  duration={episode.duration}
                />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default SeasonList;