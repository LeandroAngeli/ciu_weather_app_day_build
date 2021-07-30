import React from 'react';



const Weather = props => {
    return(
        <div className = "container">
            <div className = "cards">
                <h1>William Morris</h1>
                <h5 className="py-4">
                    <i className = "wi wi-day-sunny display-1" />
                </h5>
                <h1 className="py2">{props.temp_celsius}&deg;</h1>

                {minMaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py3">{props.descriptionDay}</h4>
            </div>
        </div>
    );

}


function minMaxTemp(min, max){
    return(
        <h3>
            <span className="px4">{min}&deg;</span>
            <span className="px4">{max}&deg;</span>
        </h3>
    )

}

export default Weather; 