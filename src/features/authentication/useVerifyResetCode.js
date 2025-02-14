import { useMutation } from "@tanstack/react-query"
import { verifyResetCode } from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";


function useVerifyResetCode() {
    const navigate = useNavigate();
    const {mutate: verifyCodeMutateFn, isPending} = useMutation({
        mutationFn: verifyResetCode,
        onSuccess: (data) => {
            if (data.data.status === 'Success') {
                toast.success('OTP code verified!');
                navigate('/resetPassword');
            }
        },
        onError: () => toast.error('OTP code entered wrong')
    });

    return {verifyCodeMutateFn , isPending }
}

export default useVerifyResetCode
