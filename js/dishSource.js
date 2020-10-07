const DishSource = {
  apiCall(params) {
    return fetch(BASE_URL + params, {
      method: "GET",
      headers: {
        "X-Mashape-KEY": API_KEY,
      },
    }).catch((error) => {
      throw new Error("Failed to fetch dishes");
    });
  },

  searchDishes({ type, query }) {
    const params = { type, query };
    const slug = Object.keys(params).reduce((acc, paramName) => {
      const paramString = `${paramName}=${params[paramName]}`;
      return acc.length ? `&${paramString}` : paramString;
    }, "");

    return this.apiCall(`recipes/search?${slug}`).then((response) =>
      response.json()
    );
  },

  getDishDetails(id) {
    return this.apiCall(`recipes/${id}/information`);
  },
};
