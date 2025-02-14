import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignin() {
  const queryClient = useQueryClient();
  const { mutate:signinMutateFn, isPending, isSuccess } = useMutation({
    mutationFn: (formData) => signin(formData),
    onSuccess: (data) => {
      toast.success(`Welcome ${data.data.user.name}!`);
      queryClient.setQueryData(['userData'], data.data.user)
    },
    onError: (err) => {
      toast.error("Invalid credentials to signin");
      console.log(err.message);
    },
  });

  return {signinMutateFn, isPending, isSuccess}
}

export default useSignin;
