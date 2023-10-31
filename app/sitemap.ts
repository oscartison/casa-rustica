export default async function sitemap() {
    const baseUrl = "https://casarustica.be";

    return [
        {
            url:baseUrl, lastModified: new Date()
        },
        {
            url:`${baseUrl}/nl`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/fr`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/pictures`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/nl/pictures`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/fr/pictures`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/contact`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/nl/contact`, lastModified: new Date()
        },
        {
            url:`${baseUrl}/fr/contact`, lastModified: new Date()
        },
    ]
    
}