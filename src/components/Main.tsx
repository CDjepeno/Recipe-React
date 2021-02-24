import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Recipes } from '../models/mock-recipes';
import Admin from './Admin';
import Card from './Card';
import Header from './Header'; 


type Params = {
    pseudo: string
}

export type Recipe = {
    recipe1 : {
        name: string;
        image: string;
        ingredients: string;
        instructions: string;
    }
}

 
const Main: React.FC<RouteComponentProps<Params>> = ({match}) => {
    const [recipes, setRecipe] = useState<any>({})
    const pseudo = match.params.pseudo;
    const formatPseudo = (pseudo: any) => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`   
    
    const fetchExemple = () => setRecipe(Recipes)

    const array = Object.keys(recipes);

    // console.log(recipes);
    
    
    const cards = array.map((key: any, index) => { 
            return (
            <Card details={recipes[key]} index={index}></Card>
        )
    })
    return (<>
        <div className="box">
            <Header pseudo={formatPseudo(pseudo)} />
            <div className="cards">
                {cards}
            </div>
            <Admin chargeExemple={fetchExemple} />
        </div>
    </>);
}
 
export default Main;