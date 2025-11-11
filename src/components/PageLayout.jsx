import React from 'react';
import { NavigationBar } from './NavigationBar';

export const PageLayout = (props) => {
    return (
        <>
            <NavigationBar />
            <br />
            <h5>
                <center></center>
            </h5>
            <br />
            {props.children}
        </>
    );
};