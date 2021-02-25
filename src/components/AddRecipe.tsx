import React from 'react'
import {useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';


export interface AddRecipeProps {
   add?: any 
}
 
const AddRecipe: React.FC<RouteComponentProps> = () => {
    // console.log(match.params)
     
    const [form, setForm] = useState({
        name:"",
        image:"",
        ingredients:"",
        instructions:""
    })

    const handleChange = (e: any) => {
        const {name, value} = e.currentTarget 
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
        e.preventDefautl();
        // console.log(form);
        
        // const recipe = {...recipes}
        // const data = await FirebaseService.postRecipe(form,pseudo)
        
    }

    return ( 
        <div>
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={handleSubmit}>
                    <input type="text" name="name"  placeholder="nom du plat" value={form.name} onChange={handleChange}/>
                    <input type="text" name="image" placeholder="nom de l'image" value={form.image} onChange={handleChange}/>
                    <textarea  name="ingredients" rows={3} placeholder="Liste des ingrédients" value={form.ingredients} onChange={handleChange}/>
                    <textarea  name="instructions" rows={15}  placeholder="Liste des instructions" value={form.instructions} onChange={handleChange}/>
                    <input type="submit" value="valider"/>
                </form>
            </div>
        </div>
     );
}
 
export default AddRecipe;