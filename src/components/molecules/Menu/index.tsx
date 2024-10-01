import React from "react";
import { MenuContainer, SidebarLink } from "./style";

export default function Menu() {
    return (
        <>
            <MenuContainer>
                <SidebarLink href="#section1">Reuniões</SidebarLink> 
                <SidebarLink href="#section1">Bazar</SidebarLink> 
                <SidebarLink href="#section1">Loja</SidebarLink> 
                <SidebarLink href="#section1">Contato</SidebarLink>               
            </MenuContainer>
        </>
    )
}