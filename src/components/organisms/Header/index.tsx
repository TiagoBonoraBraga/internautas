import React from 'react';
import { HeaderContainer, LeftSection, RightSection, Nav } from '../Header/style';
import CustomLogo from '@/components/atoms/CustomLogo';

import MenuButton from "../../atoms/MenuButton";
import Menu from '@/components/molecules/Menu';

interface HeaderProps {
    toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    return (
        <>
            <HeaderContainer>
                <LeftSection>
                    <CustomLogo title={'Internautas'} href={'/'} />
                </LeftSection>
                <Nav>
                    <Menu />
                </Nav>
                <RightSection>
                    <MenuButton toggleSidebar={toggleSidebar} />
                </RightSection>
            </HeaderContainer>
        </>
    )
}