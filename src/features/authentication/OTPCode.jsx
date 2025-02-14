import { InputOtp } from "@heroui/react";
import { useState } from "react";
import useVerifyResetCode from "./useVerifyResetCode";
import { useEffect } from "react";
import toast from "react-hot-toast";

function OTPCode() {
  const [value, setValue] = useState("");
  const {verifyCodeMutateFn, isPending} = useVerifyResetCode();

    useEffect(function() {
        if(value.length === 6) {
            verifyCodeMutateFn(value)
        }
    }, [value, verifyCodeMutateFn])

  return (
    <div className="">
      <h2 className="text-4xl font-light mb-20 mt-5">Verify Code</h2>
      <InputOtp disabled={isPending} length={6} value={value} onValueChange={setValue} />
      <div className="text-small text-default-500">
        OTP value: <span className="text-md font-medium">{value}</span>
      </div>
    </div>
  );
}

export default OTPCode;
