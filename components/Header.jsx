import Link from 'next/link';
import styled from 'styled-components';
import LogoSrc from '../static/images/netflix-logo.png';
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

const Navigation = styled.ul`
    list-style-type: none;
`;

const NavigationItem = styled.li`
    float: left;
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

// 모든 페이지의 헤더에 해당함. 네비게이션 역할을 담고잇음
const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage src={LogoSrc} alt="netfli clone logo" />
            <nav>
                <Navigation>
                    <NavigationItem>
                        <Link href="/">
                            <a>홈</a>
                        </Link>
                    </NavigationItem>
                    <NavigationItem>
                        <Link href="/originals">
                            <a>오리지널</a>
                        </Link>
                    </NavigationItem>
                    <NavigationItem>
                        <Link href="/movies">
                            <a>영화</a>
                        </Link>
                    </NavigationItem>
                    <NavigationItem>
                        <Link href="/recent">
                            <a>최신 콘텐츠</a>
                        </Link>
                    </NavigationItem>
                </Navigation>
            </nav>
            <MenuContainer>
                <CustomIcon icon={faSearch} size="xs" />
                <CustomIcon icon={faBell} size="xs" />
            </MenuContainer>
        </HeaderContainer>
    );
};

export default React.memo(Header);
