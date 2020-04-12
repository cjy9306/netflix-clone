import Link from 'next/link';
import styled from 'styled-components/macro';
import LogoSrc from '../../static/images/netflix-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
    background-color: rgb(25, 25, 25);
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    padding: 0 60px;
    z-index: 10;
`;

const LogoImage = styled.img`
    width: 144px;
    height: 40px;
    margin: 15px 36px 15px 0;
`;

const ProgramWrapper = styled.span`
    font-size: 18px;
    margin-right: 36px;
    cursor: pointer;

    & > a {
        text-decoration: none;
        color: white;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
    right: 60px;
    flex-grow: 1;
    justify-content: flex-end;
`;

const CustomIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
    color: white;
    margin-right: 36px;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage src={LogoSrc} />
            <ProgramWrapper>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </ProgramWrapper>
            <ProgramWrapper>
                <Link href="/tv">
                    <a>TV Series</a>
                </Link>
            </ProgramWrapper>
            <ProgramWrapper>
                <Link href="/movie">
                    <a>Movie</a>
                </Link>
            </ProgramWrapper>
            <ProgramWrapper>
                <Link href="/my">
                    <a>My Contents</a>
                </Link>
            </ProgramWrapper>
            <MenuContainer>
                <CustomIcon icon={faSearch} size="xs" />
                <CustomIcon icon={faBell} size="xs" />
            </MenuContainer>
        </HeaderContainer>
    );
};

export default React.memo(Header);
