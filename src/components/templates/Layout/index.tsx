import React, { useState } from "react";
import { Main, AppContainer } from "./style";
import Header from "@/components/organisms/Header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <AppContainer>
                <Header toggleSidebar={toggleSidebar} />
                {/* {isSidebarOpen && <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} */}
                <Main isSidebarOpen={isSidebarOpen}>
                    {children}
                </Main>
            </AppContainer>
        </>
    )
}