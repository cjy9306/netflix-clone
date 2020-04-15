import styled from 'styled-components/macro';
import EmptyImage from '../static/images/empty.png';

const Image = styled.img`
    display: block;
    height: 300px;
    width: 200px;
    position: relative;
`;

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

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
