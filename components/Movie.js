import styled from 'styled-components/macro';
import LazyImage from './LazyImage';

const MovieContainer = styled.div`
    box-sizing: border-box;
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.5s ease;

    &::-webkit-scrollbar {
        background: none;
        border: 1px solid rgb(48, 48, 48);
    }
    &::-webkit-scrollbar-thumb {
        background: rgb(85, 85, 85);
        border-radius: 30px;
    }
`;

const MovieContents = styled.div`
    display: none;
`;

const Movie = ({ movie }) => {
    return (
        <MovieContainer>
            <LazyImage
                src={movie.poster_path}
                alt={`${movie.original_title || movie.name} poster`}
            />
            {/* <MovieContents>
                <h2>{movie.original_title || movie.name}</h2>
            </MovieContents> */}
        </MovieContainer>
    );
};

export default React.memo(Movie);
