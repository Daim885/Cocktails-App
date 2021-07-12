class Api {
  async fetchRandomCocktail() {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!response.ok)
        throw new Error(`Failed with status code: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.log(`Request error in fetch random cocktail: ${error}`);
    }
  }

  async fetchCocktailByUrl(url) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed with statuse code: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.log(`Request error in fetch by url: ${error}`);
    }
  }
}

export default new Api();
