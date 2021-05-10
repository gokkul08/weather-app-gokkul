import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavigationBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                        <Link href="/">
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link href="/about">
                            <Button color="inherit">About</Button>
                        </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavigationBar
