import { useEffect } from "react";

const AboutUs = () =>{

    useEffect(()=>{
        console.log('effect')
    },[])

    console.log('render');



    return (
    <div>
         This is About Us Page
    </div>
    )
}


export default AboutUs;
