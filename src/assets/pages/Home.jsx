import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '/src/css/Home.css'


function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        { id: 1, title: 'Marty supreme', release_date: '2003' },
        { id: 2, title: 'Dark knight', release_date: '2023' },
        { id: 3, title: 'Detachment', release_date: '2024' },

    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form" >
                <input
                    type="text"
                    placeholder="Search your movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => (setSearchQuery(e.target.value))}

                ></input>

                <button type="submit" className="search-button"> Search </button>
            </form>

            <div className="movies-grid">
                {movies.map((x) => x.title.toLowerCase().startsWith(searchQuery) &&(<MovieCard movie={x} key={x.id} />))}
            </div>

        </div>
    )
}

export default Home;