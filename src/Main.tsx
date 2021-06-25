import React from 'react'
import {Container} from 'react-bootstrap'

import Header from './components/Header';
import {PokemonItem} from './components/PokemonItem';

interface IMain{
    text: string
}

export  const MainPage : React.FC<IMain>=(props)=>{

  
   
    return(
        <Container>
            <Header/>
        
            <PokemonItem/>
       

        </Container>
    )
}