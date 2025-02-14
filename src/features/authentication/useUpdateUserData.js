import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useUserContext } from "../../contexts/UserContext";

function useUpdateUserData() {
  const {setUserData} = useUserContext();
  const { mutate:updateUserDataMutateFn, isPending, isSuccess } = useMutation({
    mutationFn: updateUserData,
    onSuccess: (data) => {
      toast.success(`Your account information has been successfully updated`);
      localStorage.setItem("userData", JSON.stringify(data.data.user))
      setUserData(data.data.user);
    },
    onError: (err) => {
      toast.error("This email already exists");
      console.log(err.message);
    },
  });

  return {updateUserDataMutateFn, isPending, isSuccess}
}

export default useUpdateUserData
