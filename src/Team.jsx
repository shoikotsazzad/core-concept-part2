import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleReduce =()=>{
        const newTean = team - 1;
        setTeam(newTean);
    }

    const teamSyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamSyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}