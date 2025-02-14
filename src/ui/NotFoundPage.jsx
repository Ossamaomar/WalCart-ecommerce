import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="text-center">
            <h1 className="text-9xl mb-10 text-purple-600 italic">404</h1>
            <Button variant="ghost" className="bg-purple-600 text-medium text-white"><Link to={'/'}>Back to home page </Link></Button>
        </div>
    )
}

export default NotFoundPage;
