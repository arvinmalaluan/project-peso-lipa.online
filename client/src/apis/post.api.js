export const signin = (payload) => {
  return fetch("http://localhost:3000/api/v1/https/auth/signin", {
    method: "POST",
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

export const signup = (payload) => {
  return fetch("http://localhost:3000/api/v1/https/auth/signup", {
    method: "POST",
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

export const createProfileFetch = (payload) => {
  return fetch("http://localhost:3000/api/v1/https/profile/create", {
    method: "POST",
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

export const createJobPostFetch = (payload) => {
  return fetch("http://localhost:3000/api/v1/https/jobpost/create", {
    method: "POST",
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
