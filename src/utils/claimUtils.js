/**
 * Populate claims table with appropriate description
 * @param {Object} claims ID token claims
 * @returns claimsObject
 */
export const createClaimsTable = (claims) => {
    let claimsObj = {};
    let index = 0;

    Object.keys(claims).forEach((key) => {
        if (typeof claims[key] !== 'string' && typeof claims[key] !== 'number') return;
        switch (key) {
            case 'aud':
                populateClaim(
                    key,
                    claims[key],
                    "Identifies the intended recipient of the token. In ID tokens, the audience is your app's Application ID, assigned to your app in the Azure portal.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'iss':
                populateClaim(
                    key,
                    claims[key],
                    'Identifies the issuer, or authorization server that constructs and returns the token. It also identifies the Azure AD tenant for which the user was authenticated.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'iat':
                populateClaim(
                    key,
                    changeDateFormat(claims[key]),
                    '"Issued At" indicates the timestamp (UNIX timestamp) when the authentication for this user occurred.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'nbf':
                populateClaim(
                    key,
                    changeDateFormat(claims[key]),
                    'The "nbf" (not before) claim identifies the time (as UNIX timestamp) before which the JWT must not be accepted for processing.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'exp':
                populateClaim(
                    key,
                    changeDateFormat(claims[key]),
                    "The exp (expiration time) claim identifies the expiration time (as UNIX timestamp) on or after which the JWT must not be accepted for processing.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'name':
                populateClaim(
                    key,
                    claims[key],
                    "The name claim provides a human-readable value that identifies the subject of the token.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'preferred_username':
                populateClaim(
                    key,
                    claims[key],
                    "The primary username that represents the user. It could be an email address, phone number, or a generic username without a specified format.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'oid':
                populateClaim(
                    key,
                    claims[key],
                    "The oid (user's object id) is the only claim that should be used to uniquely identify a user in an Azure AD tenant.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'tid':
                populateClaim(
                    key,
                    claims[key],
                    "The tenant ID. You will use this claim to ensure that only users from the current Azure AD tenant can access this app.",
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'nonce':
                populateClaim(
                    key,
                    claims[key],
                    'Value used to associate a Client session with an ID Token to mitigate replay attacks.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'sub':
                populateClaim(
                    key,
                    claims[key],
                    'The sub claim is a pairwise identifier - it is unique to a particular application ID. If a single user signs into two different apps using two different client IDs, those apps will receive two different values for the subject claim.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'ver':
                populateClaim(
                    key,
                    claims[key],
                    'Version of the token issued by the Microsoft identity platform',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'login_hint':
                populateClaim(
                    key,
                    claims[key],
                    'An opaque, reliable login hint claim. This claim is the best value to use for the login_hint OAuth parameter in all flows to get SSO.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'idtyp':
                populateClaim(
                    key,
                    claims[key],
                    'Value is app_asserted if the identity provider authenticated the app as well as the user.',
                    index,
                    claimsObj
                );
                index++;
                break;
            case 'auth_time':
                populateClaim(
                    key,
                    claims[key],
                    'The time at which a user last entered credentials, represented in epoch time.',
                    index,
                    claimsObj
                );
                index++;
                break;
            default:
                populateClaim(key, claims[key], '', index, claimsObj);
                index++;
        }
    });

    return claimsObj;
};

/**
 * Populates claim, description, and value into an claimsObject
 * @param {String} claim
 * @param {String} value
 * @param {String} description
 * @param {Number} index
 * @param {Object} claimsObject
 */
const populateClaim = (claim, value, description, index, claimsObject) => {
    let claimsArray = [];
    claimsArray[0] = claim;
    claimsArray[1] = value;
    claimsArray[2] = description;
    claimsObject[index] = claimsArray;
};

/**
 * Transforms Unix timestamp to date and returns a string value of that date
 * @param {String} date Unix timestamp
 * @returns
 */
const changeDateFormat = (date) => {
    let dateObj = new Date(date * 1000);
    return `${date} - [${dateObj.toString()}]`;
};