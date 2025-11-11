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
                        <h1 className="display-4 mb-3">DeSimone</h1>
                        <p className="lead text-muted">
                        </p>
                    </div>
                    <Button 
                        className="signInButton px-5 py-3" 
                        onClick={handleRedirect} 
                        variant="dark"
                        size="lg"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        Sign in
                    </Button>
                    <div className="mt-4">
                        <small className="text-muted">
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