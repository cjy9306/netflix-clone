import styled from 'styled-components/macro';

const Image = styled.img`
    display: block;
    height: 300px;
    width: 200px;
    position: relative;
`;
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
const LazyImage = ({ src }) => {
    return <Image className="lazy-image" data-src={baseImageUrl + src} />;
};

export default React.memo(LazyImage);
