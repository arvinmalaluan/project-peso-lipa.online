export const getProfile = (id) => {
  return fetch(`http://localhost:3000/api/v1/https/profile/get/${id}`)
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

export const getMyJobPosts = (id) => {
  return fetch(`http://localhost:3000/api/v1/https/jobpost/get_fk/${id}`)
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

export const getSpecificJobPosts = (id) => {
  return fetch(`http://localhost:3000/api/v1/https/jobpost/get-w-profile/${id}`)
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

export const getAllJobPosts = () => {
  return fetch(`http://localhost:3000/api/v1/https/jobpost/get`)
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
