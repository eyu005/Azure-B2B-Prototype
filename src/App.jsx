import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { Container, Button } from 'react-bootstrap';
import { PageLayout } from './components/PageLayout';
import { IdTokenData } from './components/DataDisplay';
import { loginRequest } from './authConfig';
import './styles/App.css';

const MainContent = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    const handleRedirect = () => {
        instance
            .loginRedirect({
                ...loginRequest,
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="App">
            <AuthenticatedTemplate>
                {activeAccount ? (
                    <Container>
                        <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                    </Container>
                ) : null}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                    <div className="text-center mb-4">
                        <h1 className="display-4 mb-3">B2B SSO Prototype</h1>
                        <p className="lead text-muted">
                            Sign in with your organization's Microsoft account to continue
                        </p>
                    </div>
                    <Button 
                        className="signInButton px-5 py-3" 
                        onClick={handleRedirect} 
                        variant="primary"
                        size="lg"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            fill="currentColor" 
                            className="me-2" 
                            viewBox="0 0 16 16"
                        >
                            <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
                        </svg>
                        Sign in with Microsoft
                    </Button>
                    <div className="mt-4">
                        <small className="text-muted">
                            Enterprise SSO • Secure Authentication • Multi-tenant Support
                        </small>
                    </div>
                </Container>
            </UnauthenticatedTemplate>
        </div>
    );
};

const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <MainContent />
            </PageLayout>
        </MsalProvider>
    );
};

export default App;