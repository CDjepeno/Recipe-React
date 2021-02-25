import React from 'react'
import AddRecipe from './AddRecipe';

export interface AdminProps {
    chargeExemple: any
    add?: any
}
 
const Admin: React.FC<AdminProps> = ({chargeExemple, add}) => {
    return (<> 
        <div className="cards">
            {/* <AddRecipe /> */}
            <footer>
                <button onClick={chargeExemple}>Remplir</button>
            </footer>
        </div>
    </>);
}
 
export default Admin;


