import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather_component";
import "weather-icons/css/weather-icons.css";


//Api a usar = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//-34.576531, -58.648291
//API_Key = "a0c9e2645798d486f9bd63caafbaf2f9";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      icon : undefined,
      main : undefined,
      celsius : undefined,
      temp_max : undefined,
      temp_min : undefined,
      descriptionDay : "",
      error : false, 
    };
    this.getWeather();

    
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async () => {
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-34.576531&lon=-58.648291&exclude=current,hourly&appid=a0c9e2645798d486f9bd63caafbaf2f9')

    const response = await api_call.json();
    console.log(response);

    this.setState({
      celsius : this.calCelsius(response.daily.[0].temp.day),
      temp_max : this.calCelsius(response.daily.[0].temp.max),
      temp_min : this.calCelsius(response.daily.[0].temp.min),
      descriptionDay : response.daily.[0].weather.[0],
    })
  }
  state = {}
  render (){
    return(
      <div className ="App">
      <Weather 
      temp_celsius={this.state.celsius}
      temp_max = {this.state.temp_max}
      temp_min = {this.state.temp_min}
      description = {this.state.description}
      />
    </div>
    );
  }
}


export default App;
