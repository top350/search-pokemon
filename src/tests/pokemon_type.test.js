import { MockedProvider } from "@apollo/react-testing";
import { GET_POKEMONS_NAME_TEST } from "../graphql/get-pokemon";
import React from "react";
import { act, createRenderer } from "react-dom/test-utils";
import {PokemonTest} from '../components/PokemonTest';

import { render,cleanup } from "@testing-library/react";
import TestRenderer from "react-test-renderer";


const mockPokemonData ={
    request:{
        query: GET_POKEMONS_NAME_TEST
    },
    result:{
        data:{
            pokemon:{
                name:"Bulbasaur",
                types:["Grass","Poison"]
            }
        }
    }
}
afterEach(cleanup)

it("test pokemon type",async ()=>{

   test("pokemon type")
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading...');
})
