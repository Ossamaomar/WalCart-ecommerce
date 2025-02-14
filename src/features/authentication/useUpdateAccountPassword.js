import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

function useUpdateAccountPassword() {
  const navigate = useNavigate();
  const {setUserToken} = useUserContext()
  const { mutate: changePasswordMutateFn, isPending } = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      toast.success("Your password has been succesfully updated");
      localStorage.setItem("userToken", data.data.token);
      setUserToken(data.data.token);
    },
    onError: (data) => toast.error(data.data.message),
  });

  return { changePasswordMutateFn, isPending };
}

export default useUpdateAccountPassword;
