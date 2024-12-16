//import { useState } from "react";
//import { UserContext } from "./UserContextProvider";
//import { useContext } from "react";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States",
};

export const User = (props: Props) => {
    //const [isShowInfo, setShowInfo] = useState<boolean>(false);
    //const [personBio, setPersonBio] = useState<string | null>(null);

    /*
    const toggleInfo = () => {
        setShowInfo((prev) => !prev);
    }; 
    
    <button onClick={toggleInfo}> Toggle Info</button>
    


    // Form Events
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value);
    };

    // Other Event type (Keine form) 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    } 
        
    /*
        <p> 
            {""}
            {props.name} Bio: {personBio === null ? "No Bio Available" : personBio} 
        </p>
    <input onChange={handleChange} aria-label="Bio Input"/>
    */
    
    //Accesing UserContextProvider
    
    //const {users, deleteUser} = useContext(UserContext);

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married." : "is single."}</p>
            <p>Country of Origin: {props.country}</p>
        </div>
    )
};



