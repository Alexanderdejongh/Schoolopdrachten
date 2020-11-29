import React, {useContext, useState} from 'react'
import { SongContext} from '../context/useContext'

function Header() {

    const [songs, setSongs] = useContext(SongContext)

    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [ganre, setGanre] = useState('')
    const [star, setStar] = useState('')

    const handleSongInput = (event) =>{
        setSong(event.target.value)
    }
    const handleArtistInput = (event) =>{
        setArtist(event.target.value)
    }
    const handleGanreInput = (event) =>{
        setGanre(event.target.value)
    }
    const handleStarInput = (event) =>{
        setStar(event.target.value)
    }
    const emptySates = () =>{
        setSong('')
        setArtist('')
        setGanre('')
        setStar('')
    }

    const submitHandeler =(event) =>{
        event.preventDefault()
        console.log(song, artist, ganre, star)
        setSongs([...songs, {
            song: song,
            artist:artist,
            ganre: ganre,
            star: star,
            id: Math.random() * 1000
        }])
        emptySates()
    }

    return (
        <div className="headerContainer">
            <form className="headerForm" onSubmit={submitHandeler} >
                <div>
                    <p>Name Track:</p>
                    <input type="text" value={song} onChange={handleSongInput}></input>
                </div>
                <div>
                    <p>Name producer:</p>
                    <input type="text" value={artist} onChange={handleArtistInput}></input>
                </div>
                <div>
                    <p>Style:</p>
                    <select name="musicStyle" id="musicStyle" value={ganre} onChange={handleGanreInput} >
                        <option value="select">Select your Style</option>
                        <option value="rock">Rock</option>
                        <option value="trance">Trance</option>
                        <option value="dubstep">Dubstep</option>
                        <option value="Dance">Dance</option>
                        <option value="harderStyles">Harder Styles</option>
                        <option value="chillOut">Chill Out</option>
                    </select>
                </div>
                <div>
                    <p>Stars:</p>
                    <select name="musicStyle" id="stars" value={star}  onChange={handleStarInput}>
                        <option value="select">Select your Stars</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="headerForButton" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Header
