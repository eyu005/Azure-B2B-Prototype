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
            <Navbar bg="primary" variant="dark" className="px-4">
                <Navbar.Brand href="/">
                </Navbar.Brand>
                <AuthenticatedTemplate>
                    <div className="ms-auto">
                        <Button variant="warning" onClick={handleLogoutRedirect}>
                            Sign out
                        </Button>
                    </div>
                </AuthenticatedTemplate>
            </Navbar>
        </>
    );
};