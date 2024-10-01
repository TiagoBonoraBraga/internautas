import React from 'react';
import { Icon } from './style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
    toggleSidebar: () => void;
}

export default function CustomMenuButton({ toggleSidebar }: IconProps) {

    return (
        <>
            <Icon onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </Icon>
        </>
    )
}