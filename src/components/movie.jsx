
function Movie(props){
    return(
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <h6>{props.rating}</h6>
        </div>
    )
}

export default Movie