export const CookieSet = (accessToken,refreshToken) =>{
    // Set access token cookie
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
const site =parts[0]+'.'+parts[1]
    document.cookie = `accessToken=${accessToken}; domain=${site}; path=/;secure=${process.env.NODE_ENV === 'production' ? 'true' : 'false'}; max-age=${15 * 60}; secure; samesite=Strict`;
    document.cookie = `refreshToken=${refreshToken}; domain=${site}; path=/;secure=${process.env.NODE_ENV === 'production' ? 'true' : 'false'}; max-age=${7 * 24 * 60 * 60}; secure; samesite=Strict`;

}   