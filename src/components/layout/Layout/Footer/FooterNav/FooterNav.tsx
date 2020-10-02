import * as React from 'react';

import { useConfigContext, useLinkMapContext } from '@context';

import { Link } from '@components/utility';
import { BodyText, Logo } from '@components/foundations';

import * as styled from './__styles';

export const FooterNav: React.FC<FooterNavProps> = ({
    socialAccounts,
    menuItems,
}) => {
    const config = useConfigContext();
    const links = useLinkMapContext();
    const activeClass = '--is-active';

    return (
        <styled.FooterNav aria-labelledby="footermenulabel">
            <p id="footermenulabel" className="u-visually-hidden">
                Footer Navigation
            </p>

            <div className="brand">
                <Link to="/" activeClassName="--is-active">
                    <Logo type="BrandMark" size="xs" color="light" />
                </Link>
            </div>

            <div className="menus">
                <div className="menu explore">
                    <BodyText
                        size="m"
                        weight="bold"
                        color="light"
                        tag="p"
                        className="menu-title"
                    >
                        explore
                    </BodyText>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                {item.link && (
                                    <Link
                                        to={item.link}
                                        activeClassName={activeClass}
                                    >
                                        <BodyText
                                            size="s"
                                            color="medium"
                                            tag="p"
                                            weight="bold"
                                        >
                                            {item.text}
                                        </BodyText>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu social">
                    <BodyText
                        size="m"
                        weight="bold"
                        color="light"
                        tag="p"
                        className="menu-title"
                    >
                        follow us
                    </BodyText>
                    <ul>
                        {socialAccounts.map((account) => (
                            <li key={account.name}>
                                <Link
                                    to={account.link}
                                    activeClassName={activeClass}
                                >
                                    {account.icon}
                                    <BodyText
                                        size="s"
                                        color="medium"
                                        tag="p"
                                        weight="bold"
                                    >
                                        {account.name}
                                    </BodyText>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu connect">
                    <BodyText
                        size="m"
                        weight="bold"
                        color="light"
                        tag="p"
                        className="menu-title"
                    >
                        connect with us
                    </BodyText>

                    <div className="company">
                        <BodyText size="s" color="medium" tag="p">
                            {config.name.toLowerCase()}
                        </BodyText>
                        <BodyText size="s" color="medium" tag="p">
                            {config.location_city.toLowerCase()},{' '}
                            {config.location_state.toLowerCase()}
                        </BodyText>
                        <BodyText size="s" color="medium" tag="p">
                            {config.contact_email}
                        </BodyText>
                    </div>
                    {/* <ul>
                        <li key="message">
                            <Link
                                to={links.contact}
                                activeClassName={activeClass}
                            >
                                <BodyText
                                    size="s"
                                    color="medium"
                                    tag="p"
                                    weight="bold"
                                >
                                    send us a message
                                </BodyText>
                            </Link>
                        </li>
                        <li key="audition">
                            <Link
                                to={links.audition}
                                activeClassName={activeClass}
                            >
                                <BodyText
                                    size="s"
                                    color="medium"
                                    tag="p"
                                    weight="bold"
                                >
                                    audition
                                </BodyText>
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </styled.FooterNav>
    );
};

interface FooterNavProps {
    socialAccounts: {
        name: string;
        link: string;
        icon: React.ReactElement;
    }[];
    menuItems: {
        text: string;
        link: string | undefined;
    }[];
}
