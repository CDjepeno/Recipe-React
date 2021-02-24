import React from 'react'

export interface AdminProps {
    chargeExemple: any
}
 
const Admin: React.FC<AdminProps> = ({chargeExemple}) => {
    return ( 
        <footer>
            <button onClick={chargeExemple}>Remplir</button>
        </footer>
     );
}
 
export default Admin;


