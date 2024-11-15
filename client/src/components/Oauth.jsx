import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; // Use the correct Firebase package
import { app } from "../fireBase"; // Ensure the path to your firebase config is correct

const Oauth = () => {
  const handleGoogleClick = async () => {
    try {
      // Create a new Google Auth Provider instance
      const provider = new GoogleAuthProvider();

      // Initialize the auth object using your Firebase app
      const auth = getAuth(app);

      // Call signInWithPopup with auth and provider
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      // Log the result for debugging
      console.log("Google Sign-In Success:", result);
    } catch (error) {
      console.error("Could not connect to Google:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-600 text-white p-3 rounded-lg hover:opacity-80"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default Oauth;
