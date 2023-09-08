async function getCharacters() {
  const characterIDs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterIDs}`,
      {
        type: "GET",
      }
    );
    const jsonData = await response.json();
    console.log("jsonData", jsonData);
    return jsonData;
  } catch (error) {
    console.log("error", error);
  }
}

getCharacters();
