export const updateProfileFetch = (payload, id) => {
  return fetch(`http://localhost:3000/api/v1/https/profile/patch/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
