import  gql  from "graphql-tag";

export const GET_POKEMONS = gql`
query pokemons($first: Int!){
    pokemons(first:$first){
        number
        name
        image
        types
       evolutions{
          number
          name
      }
         attacks{
          fast{
            name
          }
          special{
            name
          }
        }
      }
  }

`

export const GET_POKEMONS_NAME = gql`
query pokemon($name: String){
    pokemon(name: $name){
        number
        name
        image
        types
       evolutions{
          number
          name
      }
         attacks{
          fast{
            name
          }
          special{
            name
          }
        }
    }
  }
`
export const GET_POKEMONS_NAME_TEST = gql`
query pokemon($name: String){
    pokemon(name: $name){
        name
        types
     
    }
  }
`