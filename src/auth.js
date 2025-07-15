import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_0F3nxSvsi",
    client_id: "1p85iqpsrk0n36n1cdr29qlnk6",
    redirect_uri: "http://localhost:5173/callback",
    response_type: "code",
    scope: "email openid phone",
    post_logout_redirect_uri: "http://localhost:5173/",
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "1p85iqpsrk0n36n1cdr29qlnk6";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://eu-west-10f3nxsvsi.auth.eu-west-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};