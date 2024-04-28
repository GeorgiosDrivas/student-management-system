import { useEffect, useState, createContext, useContext, useReducer } from "react";
const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};


function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const [{ isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students data');
        }
        const dt = await response.json();
        setData(dt);
      } catch (error) {
        setError('Failed to fetch students data');
      }
    };

    fetchUsers();
  }, []);


  function login(email, password) {
    if (data.students) {
      if (email === data.students[0].email && password === data.students[0].password) {
        dispatch({ type: "login" });
      }
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
