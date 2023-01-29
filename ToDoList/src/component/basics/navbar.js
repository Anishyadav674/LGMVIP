import React from 'react';
// import Menu from './menuapi';

export const Navbar = ({ filteritem, menulist }) => {

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menulist.map((element) => {
                            return (<button className="btn-group__item" onClick={() => filteritem(element)}>{element}</button>
                            )
                        })
                    }

                </div>
            </nav>

        </>)
};

export default Navbar;