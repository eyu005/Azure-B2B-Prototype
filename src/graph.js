import { graphConfig } from "./authConfig";

export async function getUserProfile(instance, account) {
    const response = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: account
    });

    const graphResponse = await fetch(graphConfig.graphMeEndpoint, {
        headers: {
            Authorization: `Bearer ${response.accessToken}`
        }
    });

    return graphResponse.json();
}
