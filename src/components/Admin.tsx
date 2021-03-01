import React, { useState } from 'react'
import AddRecipe from './AddRecipe';
import AdminForm from './AdminForm';

export interface AdminProps {
    chargeExemple: any
    add: any
    update: any 
    recipes: any
}
 
const Admin: React.FC<AdminProps> = ({chargeExemple, add, update, recipes}) => {

    return (<> 
        <div className="cards">
            <AddRecipe add={add}/>
            <footer>
                <button onClick={chargeExemple}>Remplir</button>
            </footer>
        </div>
    </>);
}
 
export default Admin;


