import React, { useState } from 'react';
import Menucard from './Menucard';
import "./style.css";
import Menu from "./menuapi";
import Navbar from './navbar';


    
    document.title='Restaurent';
const list = [
    ...new Set(
        Menu.map((curElem) => {
          return curElem.category;
        })
      ),
      "All",
    ];
console.log(list);

const Restaurant = () => {
    const [menudata, setmenudata] = useState(Menu);
   const[menulist,setmenulist]=useState(list);
   


    const filteritem = (category) => {
        if (category==="All") {
            setmenudata(Menu);
            return;
        }
        const updatelist = Menu.filter((element) => {
            return element.category === category;
        
        });
        setmenudata(updatelist);
    }



    return (

        <>
            <Navbar filteritem={filteritem} menulist={menulist} />
            <Menucard menudata={menudata} />


        </>
    );
};

export default Restaurant;