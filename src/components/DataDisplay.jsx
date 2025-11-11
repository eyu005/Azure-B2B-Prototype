import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export const IdTokenData = (props) => {
    const claims = props.idTokenClaims;
    
    // Extract user information from token claims
    const fullName = claims.name || 'N/A';
    
    // Try to get first/last name from claims, or parse from full name
    let firstName = claims.given_name || 'N/A';
    let lastName = claims.family_name || 'N/A';
    
    // If first/last name not in claims, try to parse from full name
    if ((firstName === 'N/A' || lastName === 'N/A') && fullName !== 'N/A') {
        const nameParts = fullName.split(' ');
        if (nameParts.length >= 2) {
            firstName = nameParts[0];
            lastName = nameParts.slice(1).join(' '); // Handle middle names
        } else if (nameParts.length === 1) {
            firstName = nameParts[0];
            lastName = '';
        }
    }
    
    const email = claims.preferred_username || claims.email || 'N/A';
    const userId = claims.oid || claims.sub || 'N/A';

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <Card style={{ width: '100%', maxWidth: '600px' }} className="shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">
                        <h2>Welcome {fullName}!</h2>
                    </Card.Title>
                    
                    <hr />
                    
                    <Row className="mb-3">
                        <Col xs={4} className="font-weight-bold">
                            <strong>First Name:</strong>
                        </Col>
                        <Col xs={8}>
                            {firstName}
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={4} className="font-weight-bold">
                            <strong>Last Name:</strong>
                        </Col>
                        <Col xs={8}>
                            {lastName}
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={4} className="font-weight-bold">
                            <strong>Email:</strong>
                        </Col>
                        <Col xs={8}>
                            {email}
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={4} className="font-weight-bold">
                            <strong>User ID:</strong>
                        </Col>
                        <Col xs={8}>
                            <small className="text-muted">{userId}</small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};