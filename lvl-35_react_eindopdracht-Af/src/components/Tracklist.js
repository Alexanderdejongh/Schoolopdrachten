import React from 'react'
import Trackitem from './Trackitem'
   

function TrackList(props) {
    
    

    return (
        <div className='tracklistContainer'>
            <h1 className='tracklistTitle'>Toegevoegde Tracks:</h1>
            <div className='tracklistbox' >
                <div className="Title_tracklistbox tracklistitem">
                    <p className="first">Trackname:</p>
                    <p>Artist:</p>
                    <p>Ganre:</p>
                    <p>Stars:</p>
                    <p className="last">Del</p>
                </div>
                {props.filterName.map(item =>(
                    <Trackitem key= {item.id}
                    song={item.song}
                    artist={item.artist}
                    ganre={item.ganre}
                    star={item.star}
                    item={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default TrackList
