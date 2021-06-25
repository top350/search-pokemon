import React from 'react';
import './App.css';
import {MainPage} from './Main'
import ApolloClient  from "apollo-boost";
import { ApolloProvider} from "react-apollo";

import './scss/app.scss'

const App:React.FC =()=>{

  const client = new ApolloClient({
    uri:'https://graphql-pokemon2.vercel.app'

  })

  return(

    <ApolloProvider client={client}>
      <div className="App">
      <MainPage text={'My Pokedex'}/>
      </div>
    
    </ApolloProvider>
  )
}

export default App;
