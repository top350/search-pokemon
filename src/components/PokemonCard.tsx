import React from 'react'
import { Card } from 'react-bootstrap'
import '../scss/pokemon_card.scss'

interface IPokemonCard{
   number:string,
   name:string,
   types:Array<string>,
   evolutions:Array<object>,
   image:string,
   attacks:object,
   callBack:(name:string)=>void

}

export const PokemonCard:React.FC<IPokemonCard> =(props)=>{


return(

    <div className="pokemon-card-container">
      
    
    <Card className="pokemon-card">
        <div className="flex-container">

       <Card className="pokemon-card-img">
       <img className="pokemon-img" width={220} height={220} src={props.image}alt="item"></img>
       </Card>
        
        <Card className="pokemon-card-img">

        
        <div className="item-list">
         
        <div className='row-item'>
           <p className="row-title">number: </p>
           <p> {props.number}</p>
        </div>
        <hr/>
        <div className='row-item'>
           <p className="row-title">name: </p>
           <p> {props.name}</p>
        </div>
        <hr/>
        <div className='row-item'>
           <p className="row-title">types: </p>
           <div className="types"> {props.types.map((item:string,index:number)=>{
               return <p key={index}>{item}  </p>
           })}</div>
        </div>
        
        <hr/>
        <div className='row-item'>
           <p className="row-title ">Attacks: </p>
           <div className="attacks"> 
               {(props.attacks as any).fast.map((item:any,index:number)=>{
               return <p key={index}>{item.name}  </p>
           })}
             {(props.attacks as any).special.map((item:any,index:number)=>{
               return <p key={index}>{item.name}  </p>
           })}
           </div>
      
         
        </div>
        <hr/>
        <div className='row-item'>
           <p className="row-title">evolutions: </p>
           <div className="evolutions"> {props.evolutions!==null? props.evolutions.map((item:any,index:number)=>{
               return <p className="evolutions-text" key={index} onClick={()=>props.callBack(item.name)}>{item.name}</p>
           }):<div className="none-evo"> none</div>}</div>
        </div>
      
        </div>
        </Card>
        </div>
        
    </Card>
   
   </div>
)
}

