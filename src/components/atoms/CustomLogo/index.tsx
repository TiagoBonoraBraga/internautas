import React from 'react';
import styled from 'styled-components';

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.hover}; 
  text-decoration: none;
  cursor: pointer;
`;

interface LogoProps   {
 title: string;
 href: string;
}

export default function CustomLogo({title, href}: LogoProps) {
    return (
        <>
          <Logo href={href}>{title}</Logo>
        </>
    )
}