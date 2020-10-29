export const getRepository = async (id) => {
    const response = await fetch(`https://api.github.com/repositories/${id}`);
    const data = await response.json();
    return data;
}

export const getRepositories = async (theme) => {
    console.log(theme)
    const response = await fetch(`https://api.github.com/search/repositories?q=${theme}+in%3Aname&sort=stars&order=desc&per_page=10`);
    const data = await response.json();
    return data;
}