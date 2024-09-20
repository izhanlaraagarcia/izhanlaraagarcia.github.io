import React from "react";

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            hola
            
            <div
>
            <h2>How to use Menu Component in ReactJS?</h2>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                Open Menu List
            </Button>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClose}>
                    My Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Logout
                </MenuItem>
            </Menu>
        </div>
        )
    }
}

export default Menu;