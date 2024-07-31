import { useState } from "react"

//Reglas para los objetos, pueden ser creados en archivos diferentes 
interface User {
    id:number;
    name:string;
}

// const tempUser:User = {
//     id: 789,
//     name : 'Nombre1'
// }


export const Usuario = () => {

    const [user, setUser] = useState<User>();// tempUser

    const login = () => {

        setUser({
            id:1213,
            name: 'name1'
        })
    }


    return (

        <>
            <h3>Usuario:UseState</h3>

            <button onClick={login}>
                Login
            </button>
            {
                (!user) 
                ? <pre>No hay user</pre>
                : <pre>{ JSON.stringify( user ) }</pre>
            }
        </>


    )
}
