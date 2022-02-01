import React from 'react'
import "./Card.css";
import Weather from "./Weather"

const Card = ({loading, setLoading}) => {
    const [location, setLocation] = React.useState(undefined);
    const [cities, setCities] = React.useState([]);

    React.useEffect(() => {
        const data = require(('../constants/cities.json'))
        .sort((a, b) => [a.name, b.name].sort()[0] === a.name ? -1 : 1);
        setCities(data);
        setLocation(data[0].name);
    }, []);

    const onSelectMenuChange = function(event) {
        event.preventDefault();
        console.log(event);
        setLocation(event.target.value);
    }

    return (
        <div className={`card`}>
            <div className="card_container">
                <div className="card_header">
                    <div className="card_header_title">
                        <span>
                            Het weer in {location}
                        </span>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <select className="card_header_select" onChange={onSelectMenuChange}>
                       {cities.map(city => (<option id={city.id}>{city.name}</option>))}
                    </select>
                </div>

                <hr />

                {location && (<Weather loading={loading} setLoading={setLoading} cities={cities} location={location} />)}
            </div>
        </div>
    )
}

export default Card
