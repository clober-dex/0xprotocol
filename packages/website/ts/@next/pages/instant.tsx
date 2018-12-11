import * as _ from 'lodash';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';

import {colors} from 'ts/style/colors';

import {Banner} from 'ts/@next/components/banner';
import {Button, ButtonWrap, Link} from 'ts/@next/components/button';
import {Icon} from 'ts/@next/components/Icon';
import {ImageLoop} from 'ts/@next/components/image_loop';
import {Column, Section, Wrap, WrapCentered} from 'ts/@next/components/layout';
import {SiteWrap} from 'ts/@next/components/siteWrap';
import {Heading, Paragraph} from 'ts/@next/components/text';

// import { Configurator } from 'ts/pages/instant/configurator';

import LogoOutlined from 'ts/@next/icons/illustrations/logo-outlined.svg';
import ProtocolIcon from 'ts/@next/icons/illustrations/protocol.svg';
import TokensIcon from 'ts/@next/icons/illustrations/tokens.svg';

const CONFIGURATOR_HASH = 'configure';

const featuresData = [
    {
        title: 'Support ERC-20 and ERC-721 tokens',
        icon: 'coin',
        description: 'Seamlessly integrate token purchasing into your product experience by offering digital assets ranging from in-game items to stablecoins.',
        links: [
            {
                label: 'Get Started',
                url: '#',
            },
            {
                label: 'Explore the Docs',
                url: '#',
            },
        ],
    },
    {
        title: 'Generate revenue for your business',
        icon: 'coin',
        description: 'With just a few lines of code, you can earn up to 5% in affiliate fees on every transaction from your crypto wallet or dApp.',
        links: [
            {
                label: 'Learn about affiliate fees',
                url: '#',
            },
        ],
    },
    {
        title: 'Easy and flexible integration',
        icon: 'coin',
        description: 'Use our out-of-the-box design or customize the user interface by integrating the AssetBuyer engine. You can also tap into 0x networked liquidity or choose your own liquidity pool.',
        links: [
            {
                label: 'Explore AssetBuyer',
                url: '#',
            },
            {
                label: 'Learn about liquidity',
                url: '#',
            },
        ],
    },
];

export const Next0xInstant = () => (
    <SiteWrap>
        <Section isPadLarge={true}>
            <WrapCentered>
                <Heading size="medium" isCentered={true}>Introducing 0x Instant</Heading>
                <Paragraph size="medium" isCentered={true}>
                    A free and flexible way to offer simple<br />
                    crypto purchasing in any app or website
                </Paragraph>
                <Button href="#">Get Started</Button>
            </WrapCentered>
        </Section>

        <Section isFullWidth={true} isNoPadding={true}>
            <Wrap width="full">
                <MarqueeWrap>
                    <div>
                        <img src="/images/@next/0x-instant/0x-instant-widgets@2x.png" alt="Preview of payment widgets"/>
                        <img src="/images/@next/0x-instant/0x-instant-widgets@2x.png" alt="Preview of payment widgets"/>
                        <img src="/images/@next/0x-instant/0x-instant-widgets@2x.png" alt="Preview of payment widgets"/>
                    </div>
                </MarqueeWrap>
            </Wrap>
        </Section>

        <Section>
            <Wrap width="narrow">
                {_.map(featuresData, (item, index) => (
                    <Wrap padding={['large', 0, 'large', 0]}>
                        <Column colWidth="1/3">
                            <Icon name={item.icon} size={240} />
                        </Column>

                        <Column colWidth="2/3">
                            <Heading>
                                {item.title}
                            </Heading>
                            <Paragraph size="medium" isMuted={true}>
                                {item.description}
                            </Paragraph>

                            <ButtonWrap>
                                {_.map(item.links, (link, i) => (
                                    <Link
                                        href={link.url}
                                        key={`link-${i}`}
                                        isTransparent={true}
                                        isAccentColor={true}
                                        isWithArrow={true}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </ButtonWrap>
                        </Column>
                    </Wrap>
                ))}
            </Wrap>
        </Section>

        <Section bgColor={colors.backgroundDark}>
            <Wrap>
                {/* <Configurator hash={CONFIGURATOR_HASH} /> */}
            </Wrap>
        </Section>

        <Banner
            heading="Need more flexibility?"
            subline="Dive into our docs, or contact us if needed"
            mainCta={{ text: 'Explore the Docs', href: '/docs' }}
            secondaryCta={{ text: 'Get in Touch', href: '/contact' }}
        />

        <Section>
            <Wrap width="full">
                <Column>
                    <Paragraph size="small" isMuted={0.5}>Disclaimer: The laws and regulations applicable to the use and exchange of digital assets and blockchain-native tokens, including through any software developed using the licensed work created by ZeroEx Intl. (the “Work”), vary by jurisdiction. As set forth in the Apache License, Version 2.0 applicable to the Work, developers are “solely responsible for determining the appropriateness of using or redistributing the Work,” which includes responsibility for ensuring compliance with any such applicable laws and regulations.</Paragraph>
                    <Paragraph size="small" isMuted={0.5}>See the Apache License, Version 2.0 for the specific language governing all applicable permissions and limitations.</Paragraph>
                </Column>
            </Wrap>
        </Section>
    </SiteWrap>
);

const scroll = keyframes`
    0% { transform: translate3d(0, 0, 0) }
    100% { transform: translate3d(-1715.18px, 0, 0) }
`;
const MarqueeWrap = styled.div`
    width: 100vw;
    height: 380px;
    padding-bottom: 60px;

    > div {
        width: 5145.54px;
        height: 380px;
        display: flex;
        animation: ${scroll} 20s linear infinite;

        img {
            width: auto;
            height: 380px;
        }
    }
`;
