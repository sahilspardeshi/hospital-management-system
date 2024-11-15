

export async function GetHostDomain  (url) {
    const hostname = new URL(url).hostname; 
    return hostname;
};
