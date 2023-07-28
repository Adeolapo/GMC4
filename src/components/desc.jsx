import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Description(props){
    const params = useParams();
    const [moviePreview, setMoviePreview] = useState()
    
    useEffect(() => {
        const newArr = props.data.filter((movie) => Number(movie.id) == Number(params.id));
        setMoviePreview(...newArr)
    }, [])
    return(
        <div className="page">
            <div className='container'>
                <div className="vid">
                    <img src={moviePreview.img} alt="" />
                </div>
                <h1>{moviePreview.name}</h1>
                <p>{moviePreview.desc}</p>
            </div>
            
        </div>
    )
}

export default Description 