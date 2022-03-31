const { createContext, useState, useEffect } = require("react");

// 1st you need to create a context
export const AuthContext = createContext();

// 2nd you need to create a provider
export function AuthContextProvider({ children }) {
  // variable to hold the user
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. the the token from localstorage
    // 2. verify the token
    // 3. if token is valid (staus code 200) set the user (setUser)
    // 4. token is not valid you delete the token from local storage
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
