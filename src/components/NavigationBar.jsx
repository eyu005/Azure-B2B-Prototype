import React from 'react';
import { AuthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Navbar, Button } from 'react-bootstrap';

export const NavigationBar = () => {
    const { instance } = useMsal();
    
    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };

    return (
        <>
            <Navbar style={{ backgroundColor: 'white' }} variant="light" className="px-4 shadow-sm">
                <Navbar.Brand href="/">
                    DeSimone
                </Navbar.Brand>
                <AuthenticatedTemplate>
                    <div className="ms-auto">
                        <Button variant="outline-dark" onClick={handleLogoutRedirect}>
                            Sign out
                        </Button>
                    </div>
                </AuthenticatedTemplate>
            </Navbar>
        </>
    );
};