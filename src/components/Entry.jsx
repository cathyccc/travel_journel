import Marker from '../assets/marker.svg'

export default function Entry(props) {
  return (
    <article className="entry">
      <div className="main-img-card">
        <img src={props.img.src} alt={props.img.alt}/>
      </div>

      <div className="info-details">
        <div className="country-details">
          <img src={Marker} className="marker" alt="marker"/>
          <span className="country-name">{props.country.toUpperCase()}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>

        <h2 className="location-name">{props.title}</h2>
        <p className="dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}