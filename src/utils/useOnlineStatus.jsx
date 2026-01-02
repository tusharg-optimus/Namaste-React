import { useState, useEffect } from "react";

const useOnlineStatus = () => {
// check if the user is online or offline

const [onlineStatus, setOnlineStatus] = useState(true); // true or false

useEffect(() => {

    window.addEventListener("offline", () => {
        console.log("You are offline");

        setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        console.log("You are online");
        setOnlineStatus(true);
    });
}, []);

//bool
return onlineStatus;


};

export default useOnlineStatus;