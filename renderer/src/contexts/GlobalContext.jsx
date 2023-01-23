import { createContext, useContext, useEffect, useState } from 'react';
import Utils from '../utils/Utils';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [currentPage, setCurrentPage] = useState("dashboard")

    useEffect(() => {
        let selectedPage = Utils.getLocalStorage("currentPage")
        if(selectedPage) {
            setCurrentPage(selectedPage)
        }
    }, [])

    useEffect(() => {
        Utils.saveLocalStorage("currentPage", currentPage)
    }, [currentPage])

    let sharedState = {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage
    }

    return (
        <>
            <AppContext.Provider value={sharedState}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}