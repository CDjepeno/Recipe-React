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
    
    // useEffect(() => { 
    //     if(recipes){
    //         postRecipes()
    //     }
    // },[recipes])  

    useEffect(() => {
        fetchRecipes()
    },[])
    
    const fetchExemple = () => {
        if(!recipes) {
            setRecipes({Recipes})
            postRecipes()
        }
    }

    console.log(recipes);
    

    const fetchRecipes = async () => {
        const data = await FirebaseService.getRecipePseudo(pseudo)
        // .then(response =>console.log(response)) 
        // console.log(data);
        
        setRecipes(data) 
    }

    const postRecipes = async () => {        
        const recipe = {...recipes}
        await FirebaseService.postRecipe(recipe,pseudo)
    }

    const addRecipes = async (e:any, recipe: string) => {
        e.preventDefautl();
        // console.log(form);
        
        const r = {...recipes}
        r[`recipe-${Date.now}`] = recipe
        setRecipes({r})
        const data = await FirebaseService.postRecipe(recipes,pseudo)
    }
    
    if(!recipes) {
        
    } else {
 
        const array = Object.keys(recipes);
   
        cards = array.map((key: any, index) => { 
            console.log(recipes[key])  
            return (
                
                // <Card details={recipes[key]} index={index}></Card>
                Object.values(recipes[key]).map((r:any) => {
                    return(
                        // console.log(r)
                        Object.values(r).map(recipe => {
                            // console.log(recipe);
                            return (
                                <Card details={recipe} index={index}></Card>   
                            )
                        })
                        // console.log('jsui la') 
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
            <Admin chargeExemple={fetchExemple} add={fetchExemple} />
        </div>
    </>);
}
 
export default Main;