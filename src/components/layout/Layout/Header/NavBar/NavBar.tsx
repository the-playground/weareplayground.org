import React from 'react';

import { LinkHandler } from '@components/utility';
import { BodyText } from '@components/foundations';

import * as styled from './__styles';

export const NavBar: React.FC<NavBarProps> = ({ menuItems }) => {
    return (
        <styled.NavBar aria-labelledby="mainmenulabel">
            <p id="mainmenulabel" className="u-visually-hidden">
                Main Menu
            </p>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.text}>
                        <LinkHandler
                            to={`/${item.page.uid}`}
                            activeClassName="--is-active"
                        >
                            <BodyText
                                tag="span"
                                size="m"
                                weight="bold"
                                color="light"
                            >
                                {item.text}
                            </BodyText>
                        </LinkHandler>
                    </li>
                ))}
            </ul>
        </styled.NavBar>
    );
};

interface NavBarProps {
    menuItems: {
        page: {
            uid: string;
        };
        text: string;
    }[];
}
