import { createContext, useContext, useEffect, useState } from 'react';
import Utils from '../utils/Utils';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [currentPage, setCurrentPage] = useState("dashboard")
    const [currentBusiness, setCurrentBusiness] = useState(null)
    const [chooseDashboardMenu, setChooseDashboardMenu] = useState(null)

    useEffect(() => {
        let selectedPage = Utils.getLocalStorage("currentPage")
        if(selectedPage) {
            setCurrentPage(selectedPage)
        }

        let selectedBusiness = Utils.getLocalStorage("currentbusiness")
        if(selectedBusiness) {
            setCurrentBusiness(selectedBusiness)
        }

        let selectedDashboardMenu = Utils.getLocalStorage("selectedDashboardMenu")
        if(selectedDashboardMenu) {
            setChooseDashboardMenu(selectedDashboardMenu)
        }else{
            setChooseDashboardMenu("dashboard")
        }
    }, [])

    useEffect(() => {
        Utils.saveLocalStorage("currentPage", currentPage)
    }, [currentPage])

    useEffect(() => {
        if(currentBusiness) {
            Utils.saveLocalStorage("currentbusiness", currentBusiness)
        }
    }, [currentBusiness])

    useEffect(() => {
        if(chooseDashboardMenu) {
            Utils.saveLocalStorage("selectedDashboardMenu", chooseDashboardMenu)
        }
    }, [chooseDashboardMenu])

    let sharedState = {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
        currentBusiness: currentBusiness,
        setCurrentBusiness: setCurrentBusiness,
        chooseDashboardMenu: chooseDashboardMenu,
        setChooseDashboardMenu: setChooseDashboardMenu
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