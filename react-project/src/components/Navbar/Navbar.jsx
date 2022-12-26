import React, {useEffect, useState} from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Grid, Tabs, Tab } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './navbar.css'
import logo from '../../assets/panda.png'
import useStyle from './Navbar-style'
import { Navigate, NavLink, useParams } from 'react-router-dom';
import Cart from '../pages/Cart2/cart'
import { useAuth } from '../../context/AuthProvider';
import authService from '../../context/Authservice';



const Navbar = () => {
    const classes = useStyle();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     const config = {
    //         headers : {
    //             Authorization : 'Bearer ' + localStorage.getItem('token')
    //         }
    //     }
    //     axios.get('api/users/me',config).then(
    //         res => {
    //             console.log(res)
    //         },
    //         err => {
    //             console.log(err)
    //         }
    //     )
    //     setIsLoggedIn(true);
    // },[])
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = authService.getCurrentUser();
        if ( user ) {
            setCurrentUser(user);
        }
        
    },[])
    const logOut = () => {
        authService.logout();
    };
    const token = localStorage.getItem('userToken');
    const user = parseJwt(token);
    console.log(user)
    const [open,setOpen] = useState(0)
    const [goToContact,] = useState(false);
    if (goToContact) {
        return <Navigate to='/PageLogin' />
    }
    return (
        <div>
            <AppBar style={{ height: "75px", }} position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar className={classes.center}>
                    <Typography variant='h6' className={classes.title} color='inherit' sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        PANDA
                    </Typography>
                    <div className={classes.grow} />
                    <Grid className={"page__menu menu__list r-list"} item xs={9}>
                        <Tabs className={"menu__group"} centered >
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/" >
                                <Tab className={"menu__link r-link text-underlined font"} label="ANASAYFA" />
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/AllProducts" >
                                <Tab className={"menu__link r-link text-underlined font"} label="TÜM ÜRÜNLER" />
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/About" >
                                <Tab className={"menu__link r-link text-underlined font"} label="HAKKIMIZDA" />
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/Contact" >
                                <Tab className={"menu__link r-link text-underlined font"} label="İLETİŞİM" />
                            </NavLink>


                        </Tabs>
                    </Grid>
                    {/* <Grid className={"page__menu menu__list r-list"} item>
                        <Tabs className={"menu__group p.two"}>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/PageLogin" >
                                <Tab className={"menu__link r-link text-underlined font"} style={{ left: '10px' }} label="GİRİŞ" />
                            </NavLink>
                        </Tabs>
                    </Grid> */}
                    { currentUser ? (
                        <Tabs className={"menu__group p.two"}>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/" onClick={logOut} >
                                <Tab className={"menu__link r-link text-underlined font"} style={{ left: '10px' }} label={user.email + " Çıkış"} />
                            </NavLink>
                        </Tabs>
                        // <NavLink className={"menu__link r-link text-underlined font"}  style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to='/' onClick={logOut}> Çıkış </NavLink>
                    ) : (
                        // <NavLink className={"menu__link r-link text-underlined font"}  style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/PageLogin">Giriş</NavLink>
                        <Tabs className={"menu__group p.two"}>
                            <NavLink style={{ textDecoration: 'none', color: 'black', alignItems: 'center' }} to="/PageLogin" >
                                <Tab className={"menu__link r-link text-underlined font"} style={{ left: '10px' }} label="GİRİŞ" />
                            </NavLink>
                        </Tabs>
                    ) }
                    <Grid>
                        <Grid item xs={2} style={{ display: 'center', justifyContent: 'flex-end' }}>   
                            <IconButton aria-label='Show cart items' color="inherit" >
                                <Badge badgeContent={1} color='secondary' >
                                    <ShoppingCart onClick={() => setOpen(!open)} style={{ marginTop: '1px', justifyContent: 'center', height: '25px', width: 'auto' }} />
                                </Badge>
                            </IconButton> 
                        </Grid>
                    </Grid>   
                    {open && <Cart />}                 
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar

function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}