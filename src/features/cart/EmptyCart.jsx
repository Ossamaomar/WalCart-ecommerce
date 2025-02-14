import { Button } from "@heroui/react"
import { Link } from "react-router-dom"

function EmptyCart() {
    return (
        <div className="flex justify-center flex-col items-center text-center gap-8">
            <h2 className="text-xl font-medium">Your cart is currently empty add products to it to checkout!</h2>
            <Button variant="ghost" className="bg-purple-600 text-medium text-white"><Link to={'/'}>Back to home page </Link></Button>
        </div>
    )
}

export default EmptyCart
