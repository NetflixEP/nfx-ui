import React, {useEffect, useState} from "react"
import './Row.css'

function Row({title, imageUrls, isLargeRow = false}) {
    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(fetchUrl);
    //         setMovies(request.data.results);
    //         return request;
    //     }
    //     fetchData();
    // }, [fetchUrl]);

    const base_url = "https://m.media-amazon.com/images/M/MV5BN2I4ZmM4OTItZGIzNy00YjRmLWI0NWUtMjZjNWFhODgxNzZiXkEyXkFqcGdeQXVyMzUxNDM0ODk@._V1_.jpg";

    return (
        <div className="row">
            <h1>{title}</h1>
            {/*{movies.map((movie) => (
                <img src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name}
                />
            ))}*/}
            <div className="row-posters">
                {imageUrls.map((imageUrl, index) => (
                    <img className="row-poster" key={index} src={imageUrl} alt="" />
                ))}

            </div>
        </div>
    )
}

export default Row;