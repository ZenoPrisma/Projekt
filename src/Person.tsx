import { useState } from "react";

export interface Persons {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Persons) => {
    //const [isShowInfo, setShowInfo] = useState<boolean>(false);
    const [personBio, setPersonBio] = useState<string | null>(null);

    /*
    const toggleInfo = () => {
        setShowInfo((prev) => !prev);
    }; 
    
    <button onClick={toggleInfo}> Toggle Info</button>
    */

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value);
    };

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married." : "is single."}</p>
                
            <p> 
                {""}
                {props.name} Bio: {personBio === null ? "No Bio Available" : personBio} 
            </p>
            <input onChange={handleChange} aria-label="Bio Input"/>
        </div>
    )
};


