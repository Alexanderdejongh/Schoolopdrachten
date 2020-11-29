import React, {useContext, useEffect, useState} from 'react'
import Header from './Header'
import TrackList from "./Tracklist"
import FilterSection from "./FilterSection"
import { SongContext} from '../context/useContext'
import Nav from './Nav'
import About from './About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Container() {
    // global state
    const [songs, setSongs] = useContext(SongContext);

    // save to local storage
    const saveLocalSongs =() => localStorage.setItem('songs', JSON.stringify(songs))
    
    const  getLocalSongs = () =>{
        if(localStorage.getItem('songs') === null){
            localStorage.setItem('songs', JSON.stringify([]))
        }else {
            let songLocal = JSON.parse(localStorage.getItem('songs'))
            setSongs(songLocal)
        }
    }

    // copy van state om te kunnen filteren
    const [songsToFilter, setSongsToFilter] = useState([]);

    // Status komt binnen van de knoppen
    const [status, setStatus] =useState("all")

    const filterHandeler = () =>{
        switch(status){
            case 'Rock':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'rock'))
                break
            case 'Trance':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'trance'))
                break
            case 'Dubstep':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'dubstep'))
                break
            case 'Dance':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'Dance'))
                break
            case 'Harder Styles':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'harderStyles'))
                break
            case 'Chill Out':
                setSongsToFilter(songsToFilter.filter(todo => todo.ganre === 'chillOut'))
                break
            case 'All':
                setSongsToFilter(songs)
                break
            default:
                setSongsToFilter(songs)
                break
        }
    }

        //USE EFFECT
    useEffect(()=>{
        getLocalSongs()
    }, [])

    useEffect(()=>{
        saveLocalSongs()
        setSongsToFilter(songs)
    }, [songs]) 


    useEffect(()=>{
        filterHandeler();
    }, [status]) 

    const resetSongsToFilter = () =>{
        setSongsToFilter(songs)
    }

    return (
        <Router>
            <div className="container"> 
                <h1 className="container__mainTitle">Winc Lil' Tracklist</h1>
                    <Nav />
                    <Header />
                    <FilterSection setStatus={setStatus}
                    resetSongsToFilter={resetSongsToFilter}/>
                    <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/" exact component=
                    {() => <TrackList  filterName={songsToFilter}/>}/>
                    </Switch>
            </div>
        </Router>
    )
}

export default Container
