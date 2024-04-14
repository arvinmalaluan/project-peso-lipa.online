export const deleteFetch = (url_ext) => {
  return fetch(`http://localhost:3000/api/v1/https/${url_ext}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Return parsed JSON response
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Rethrow the error for handling in the caller function
    });
};
