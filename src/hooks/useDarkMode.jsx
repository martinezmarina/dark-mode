import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)

    useEffect(() => {
     
        if(value) {
            document.querySelector('body').classList.add("dark-mode");
            //add class "dark-mode" to the body element
        } else {
            document.querySelector('body').classList.remove("dark-mode");
        }
        //remove class "dark-mode" from the body element
    }, [value])
    return[value, setValue];
}