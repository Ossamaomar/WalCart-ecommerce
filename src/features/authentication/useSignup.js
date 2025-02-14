import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const navigate = useNavigate();
  const { mutate:signupMutateFn, isPending } = useMutation({
    mutationFn: (formData) => signup(formData),
    onSuccess: () => {
      toast.success("Account successfully created!");
      navigate('/login')
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {signupMutateFn, isPending}
}

export default useSignup;
