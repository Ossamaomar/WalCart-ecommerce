import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUserToken, setUserData, setUserId } = useUserContext();

  function logout() {
    // Clear user-related data from local storage
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    setUserToken(null);
    setUserData({});
    setUserId(null);

    // Clear all cached queries
    queryClient.clear();

    // Redirect user to login page or homepage
    
    navigate('/') // Or use navigate from react-router
  }

  return { logout };
}

export default useLogout;
