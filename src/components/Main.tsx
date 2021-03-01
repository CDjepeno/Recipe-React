import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Recipes } from '../models/mock-recipes';
import FirebaseService from '../services/FirebaseAPI';
import Admin from './Admin';
import Card from './Card';
import Header from './Header'; 


type Params = {
    pseudo: string
}

export type Recipe = {
    recipe : {
        name: string;
        image: string;
        ingredients: string;
        instructions: string;
    }
}

const Main: React.FC<RouteComponentProps<Params>> = ({match}) => {
    const [recipes, setRecipes] = useState<any>({})
    const pseudo = match.params.pseudo;
    let cards;
    const formatPseudo = (pseudo: any) => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}` 
     
    useEffect(() => {
        fetchRecipes()        
    },[])
    
    const fetchExemple = () => {
        if(!recipes) {
            setRecipes({Recipes})
        }
    }    

    const fetchRecipes = async () => {
        const data = await FirebaseService.getRecipePseudo(pseudo)
        setRecipes(data) 
    }

    const postRecipes = async (recipe: any) => {        
        await FirebaseService.postRecipe(recipe,pseudo)
        fetchRecipes()
    }

    const addRecipes =  (recipe: string) => {        
        let Recipes: any= {};

        Recipes[`recipe-${Date.now()}`] = recipe 
        
        postRecipes(Recipes)
    
    }
    const updateRecipes =  (newRecipe: any, key: any) => {        
        let Recipes: any= {};

        Recipes[key] = newRecipe 
        
        postRecipes(Recipes)
    }
    
    const handleDelete = async (pseudo: any, id: any) => {
        
        await FirebaseService.deleteRecipe(pseudo, id)
        fetchRecipes() 
    }

    if(recipes) { 
        const array = Object.keys(recipes);
        
        cards = array.map((key: any, index) => { 
              console.log(key)
              let id= key
            return (
                Object.values(recipes[key]).map((r:any) => {
                    
                    return(
                        <Card 
                            details={r} 
                            index={index} 
                            del={handleDelete}
                            pseudo={pseudo}
                            id={key}
                        ></Card>   
                    )       
                })   
            )
        })  
    } 

    return (<>
        <div className="box">
            <Header pseudo={formatPseudo(pseudo)} />
            <div className="cards">
                {cards}
            </div>
            <Admin 
                chargeExemple={fetchExemple} 
                add={addRecipes} 
                update={updateRecipes}  
                recipes={recipes}
            />
        </div>
    </>);
}
 
export default Main;