import styled from 'styled-components';
import EmptyImage from '../static/images/empty.png';

const Image = styled.img`
    display: block;
    height: 300px;
    width: 200px;
    position: relative;
`;

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

/* 
    Lazy loading을 위한 이미지 컴포넌트 
    class='lazy-image'로 lazy image들을 관리함
    우선은 스켈레톤 이미지를 src로 선택하고 추후 IntersectionObserver를 통해 로딩함
    나중에 스켈레톤 이미지를 css로 변환하는 작업 필요
*/

const LazyImage = ({ src, alt }) => {
    return (
        <Image
            className="lazy-image"
            src={EmptyImage}
            data-src={baseImageUrl + src}
            alt={alt}
        />
    );
};

export default React.memo(LazyImage);
