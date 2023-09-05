import React, { Component } from "react";
import { Cards } from "./Cards";
import { Header } from "./Header";
import RickAndMortyService from "../../services/RickAndMorty.service";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {personajes: [] };
  }
  componentDidMount() {
    
  }

  render() {

    
    return (
      
      <div>
        <Header/>
        <Cards />
      </div>
    );
  }
}
