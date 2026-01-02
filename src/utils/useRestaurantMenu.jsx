import { useEffect } from "react";

const useRestaurantMenu = (resId) => {
    // Logic for fetching restaurant menu will go here

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data= await fetch("" + resId);
        const json = await data.json();
        console.log(json);

        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;