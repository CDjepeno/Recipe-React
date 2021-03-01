import React, { useState } from 'react'


export interface AdminFormProps {
    key: any 
    id: any 
    update: any 
    recipes: any
}
 
const AdminForm: React.FC<AdminFormProps> = ({id, update, recipes}) => {

    console.log(recipes[id]);
    
    const [form, setForm] = useState({
        name: "",
        image: "",
        ingredients: "",
        instructions: ""
    })

    

    const array = Object.keys(recipes);
   
    const recipe = array.map((key: any, index) => { 
            console.log(recipes[key])   
            return (
                Object.values(recipes[key]).map((r:any) => {
                    console.log(r);                         
                    const handleChange = (e: any,key: any) => {
                        const {name, value} = e.target 
                        
                        const r = recipes[key]
                        r[name] = value;
                    }

                    // const recipe 

                    return(
                        // console.log(r)
                        <form className="admin-form">
                            <input value={r.name} onChange={e => handleChange(e,key)} type="text" name="name" placeholder="Nom de la recette"/>
                            <input value={r.image} onChange={e => handleChange(e,key)} type="text" name="image" placeholder="Adresse de l'image"/>
                            <textarea value={r.ingredients} onChange={e => handleChange(e,key)}  name="ingredients" placeholder="Liste des ingredients" rows={3}/>
                            <textarea value={r.instructions} onChange={e => handleChange(e,key)}  name="instructions" placeholder="Liste des instructions" rows={15}/>
                        </form>
                        // <Card details={r} index={index}></Card>   
                    )       
                })   
            )
        })  

    // const recipe = recipes[id]
    console.log(form);
    
    
    return ( 
        <div className="card">
            <form className="admin-form">
                <input type="text" name="name" placeholder="Nom de la recette"/>
                <input type="text" name="image" placeholder="Adresse de l'image"/>
                <textarea  name="ingredients" placeholder="Liste des ingredients" rows={3}/>
                <textarea  name="instructions" placeholder="Liste des instructions" rows={15}/>
            </form>
            {/* {recipe} */}
            <button>Supprimer</button>
        </div>
     );
}
 
export default AdminForm;