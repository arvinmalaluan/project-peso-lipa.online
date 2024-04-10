export const getProfile = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/https/profile/get/${id}`
    );

    if (!response.ok) {
      const errorData = await response.json(); // Attempt to parse error details from response
      throw new Error(
        `Network response was not ok: ${
          errorData?.message || "No error message provided"
        }`
      );
    }

    return await response.json(); // Return parsed JSON response
  } catch (error) {
    // console.error("Error getting profile:", error);
    return { error: error.message || "An error occurred" }; // Example error handling
  }
};
