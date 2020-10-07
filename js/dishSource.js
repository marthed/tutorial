const DishSource = {
  apiCall(params) {
    return fetch(BASE_URL + params, {
      method: "GET",
      headers: {
        "X-Mashape-KEY": API_KEY,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error("Failed to fetch dishes");
      }
      return response;
    });
  },

  searchDishes({ type, query }) {
    const params = { type, query };
    const slug = Object.keys(params).reduce((acc, paramName) => {
      const paramString = params[paramName]
        ? `${paramName}=${params[paramName]}`
        : "";
      return acc.length ? `&${paramString}` : paramString;
    }, "");

    return this.apiCall(`recipes/search${slug ? "?" + slug : ""}`)
      .then((response) => response.json())
      .then((data) => data.results);
  },

  getDishDetails(id) {
    return this.apiCall(`recipes/${id}/information`);
  },
};
