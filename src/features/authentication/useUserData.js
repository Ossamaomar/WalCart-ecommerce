import { useQueryClient } from "@tanstack/react-query";


function useUserData() {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(['userData']);
    return data;
}

export default useUserData;
