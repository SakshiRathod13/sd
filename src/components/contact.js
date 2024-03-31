import React from "react";
import Card from './card';
const Contact=(props)=>{
    const renders=props.contact.map((contacts)=>{
        return(
            
           <Card contacts={contacts}></Card>
         

        );
    })
    return(
        <div>
            {renders}
        </div>
   
    );
}
export default Contact;