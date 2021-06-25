import React,{ useEffect, useState } from 'react'
import { GET_POKEMONS, GET_POKEMONS_NAME } from '../graphql/get-pokemon'
import {  useQuery } from 'react-apollo'
import { PokemonCard } from './PokemonCard'
import { Form  } from "react-bootstrap";
import '../scss/pokemon_item.scss'





export const PokemonItem:React.FC =(props)=>{
    const [input, setInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const {data:{pokemons=[]}={}} =useQuery(GET_POKEMONS,{variables:{first:151}})
    const {data:{pokemon={}}={}} =useQuery(GET_POKEMONS_NAME,{variables:{name:input}})
  

const formOnchange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    
 setInput(e.target.value)

}



useEffect(() => {
  
        setLoading(true)
 

}, [pokemon])

const pokemonCard=(pokemon:any)=>{
    
  
    if(loading && pokemon.name!==undefined){
        return(
            <PokemonCard
            number={pokemon.number} 
            name={pokemon.name} 
            types={pokemon.types}
            image={pokemon.image}
            attacks={pokemon.attacks}
            evolutions={pokemon.evolutions}
            callBack={searchCallBack}
             />
        
          )
    }else{
        return(<div>Loading...</div>)
    }
       
  
 
}

const searchCallBack=(name:string)=>{

     console.log(name)
     return setInput(name)
}
return(


    <div>
       
      <Form >
          <div className="search-wrap"> 
            <Form.Group  controlId="formBasicName">
  
                <Form.Control value={input} onChange={formOnchange} className="search-bar" placeholder="Enter Pokemon name" />

            </Form.Group>
           
          </div>
     
      </Form>

     <div className="item-grid">
  
         
  {
      (pokemons.length!==0&&input.length<1)?
      pokemons.map((item: any, index:number)=>{
          return (
            <PokemonCard
             key={index} 
             number={item.number} 
             name={item.name} 
             types={item.types}
             image={item.image}
             attacks={item.attacks}
             evolutions={item.evolutions}
             callBack={searchCallBack}
              />
          )
      })
      :
      (pokemon!== null && input.length>1 &&loading===true)?
    <div>
      {pokemonCard(pokemon)} 
    </div>
      :
      <div className="not-found">Pokemon not found</div>
      
  }


     </div>
      </div>

  

)
}

