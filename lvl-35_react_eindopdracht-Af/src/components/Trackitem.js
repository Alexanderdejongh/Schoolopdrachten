import React, {useContext} from 'react'
import { SongContext} from '../context/useContext'    

function Trackitem(props) {
    const [songs, setSongs] = useContext(SongContext);
    
    const deleteHandler = () =>{
        setSongs(songs.filter(el =>el.id !== props.item.id))
    }
    return (
        <div className="item_tracklistbox tracklistitem">
            <p>{props.song}</p>
            <p>{props.artist}</p>
            <p>{props.ganre}</p>
            <p>{props.star}</p>
            <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Trackitem
