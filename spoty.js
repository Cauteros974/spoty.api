const token = 'BQBzBHqzn9v7orggTqYdRDXj-dWxmIJdKkWfIRcdQZd_4ZNZ4XJCouikhATP5Km7NB7avhnmQx6r-sFDe3WnkkRry8AQT5j1KzCtMm2xQl1bmoKuZLRJC3SV3tbN3oS9XjHmvtQJr25UpLaLxEYK8v91UX2UxRmOcg3B56E_C73TE-gHNPBN9tL0CEMoECMcegPREa9bRVUNoS5PNYuam3uGj8QIgii6Oq8KnTudQdwKg0R2oCojJocAO7931MEPmjQFhmSzba2dcpofOjVM';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getToptracks(){
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getToptracks();
console.log(
    topTracks?.map(
        ({name, artists}) =>
        `${name} by ${artists.map(artists => artists.name).join(', ')}`
    )
);