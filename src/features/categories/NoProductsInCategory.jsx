import { Button } from "@heroui/react"
import { useNavigate } from "react-router-dom"

function NoProductsInCategory() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center flex-col items-center text-center gap-8">
            <h2 className="text-xl font-medium">No Products currently added to this category stay tuned for more in the future!</h2>
            <Button variant="ghost" className="bg-purple-600 text-medium text-white" onPress={() => navigate('/')}>Back to home page</Button>
        </div>
    )
}

export default NoProductsInCategory
