const token ='BQBzBHqzn9v7orggTqYdRDXj-dWxmIJdKkWfIRcdQZd_4ZNZ4XJCouikhATP5Km7NB7avhnmQx6r-sFDe3WnkkRry8AQT5j1KzCtMm2xQl1bmoKuZLRJC3SV3tbN3oS9XjHmvtQJr25UpLaLxEYK8v91UX2UxRmOcg3B56E_C73TE-gHNPBN9tL0CEMoECMcegPREa9bRVUNoS5PNYuam3uGj8QIgii6Oq8KnTudQdwKg0R2oCojJocAO7931MEPmjQFhmSzba2dcpofOjVM';
async function fetchWebApi(endpoint, method, body){
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

const topTracksIds = [
    '6x81iE9IYuIqlL0C3rGpTK','5ncqQePoJItjcd6TSrdajO','4SUpPTdkAOoklM62WgkZCg'
];

async function getRecommendations(){
    return (await fetchWebApi(
        `v1/recommendations?limit=3&seed_tracks=${topTracksIds.join(',')}`, 'GET'
    )).tracks;
}

const recommendedTracs = await getRecommendations();
console.log(
   recommendedTracs.map(
    ({name, artists}) =>
    `${name} by ${artists.map(artists => artists.name).join(', ')}`
   ) 
);