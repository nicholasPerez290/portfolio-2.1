import "./card.css"

export default function Card(props) {

  return(
      <a className='card-cont' href={props.link}>
        <div className="card"  style={props.style}>
        <div className="text-cont">
            <h2 className="card-title">{props.name}</h2>
            <p className="card-tech">{props.tech}</p>
        </div>
    </div>
    </a>
  )
}