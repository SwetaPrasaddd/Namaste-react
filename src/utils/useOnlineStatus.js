import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //Try to check if online or offline
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);
    return onlineStatus;// Boolean value
}

export default useOnlineStatus;