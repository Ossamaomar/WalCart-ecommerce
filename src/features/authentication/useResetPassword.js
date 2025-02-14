import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPasswordMutateFn, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Your password has been succesfully updated");
      navigate('/login');
    },
    onError: (data) => toast.error(data.data.message),
  });

  return { resetPasswordMutateFn, isPending };
}

export default useResetPassword;
