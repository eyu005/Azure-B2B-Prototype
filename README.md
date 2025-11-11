# SFA Application – Azure B2B Login Prototype

A simple Single Page Application demonstrating B2B login using Azure B2B collaboration.

## Installations

Run the following commands in the project directory to install the required authentication and styling packages:

```bash
npm install @azure/msal-browser @azure/msal-react
npm install react-bootstrap bootstrap
```

## Build the app in the development mode

```bash
npm start
```

## Updating Authentication Configuration (clientId, tenantId, authority)

The authentication configuration for Azure AD is located in the `authConfig.js` object.  
Update these values according to your Azure AD environment.

### Default Authentication Settings

By default, this project is configured with **eunsang1313@gmail.com's 'clientId'**
It allows sign in from **both work (Azure AD)** and **personal (Microsoft) accounts**.

### 1) clientId
This is your application’s **Application (client) ID** in Azure AD.

To find it:
1. Open **Azure Portal**
2. Go to **App registrations**
3. Select your app
4. Copy **Application (client) ID**

Update the value:
```javascript
clientId: 'your-client-id-here'
```

### 2) tenantId/authority
The authority defines who can sign in

**Option A - Single Tenant**
Only users from your tenant (and invited guests) can sign in:

Update the value:
```javascript
authority: 'https://login.microsoftonline.com/<your-tenant-id>'
```

**Option B - Multi-Tenant/B2B Guests**
Allow users from any Azure AD tenant to sign in:

Update the value:
```javascript
authority: 'https://login.microsoftonline.com/common'
```

### 3) redirectURL

Must match a Redirect URL registered in Azure Portal -> App registrations -> Authentication.

Local development default:

```javascript
redirectUri: 'http://localhost:3000'
```



