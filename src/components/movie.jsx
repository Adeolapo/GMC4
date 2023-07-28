import {Link} from 'react-router-dom'
function Movie(props){
    console.log(props)
    return(
            <Link to={`/description/${props.id}`}>
        <div className="card">
            
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <h6>{props.rating}</h6>
        </div>
            </Link>
    )
}

export default Movie