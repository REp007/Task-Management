import { useContext } from "react";
import { ContextApp } from "@/context/ContextComp";
import type { InitState } from "@/context/ContextComp";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; // Assuming these are available in your Shadcn UI
// import { Button } from "@/components/ui/button";

const Profile = () => {
    const { user, 
        // logout 
    } = useContext<InitState>(ContextApp);

    return (
        <div className="container mx-auto p-4">
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <h2 className="text-2xl font-semibold">Profile</h2>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold">Name:</span>
                            <span>{user.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold">Email:</span>
                            <span>{user.email}</span>
                        </div>
                    </div>
                </CardContent>
                {/* <CardFooter className="flex justify-end">
                    <Button variant="destructive" onClick={() => logout()}>Logout</Button>
                </CardFooter> */}
            </Card>
        </div>
    );
};

export default Profile;