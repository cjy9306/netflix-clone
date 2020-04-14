import styled from 'styled-components/macro';
import Movie from './Movie';

const GenreContainer = styled.section`
    color: white;
    margin-bottom: 48px;
    position: relative;
    z-index: 4;
`;

const GenreHeader = styled.div`
    font-size: 1.4vw;
    line-height: 1.3;
    margin-bottom: 0.25em;
`;

const GenreContents = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`;

const Genre = ({ type, movieList }) => {
    return (
        <GenreContainer>
            <GenreHeader>{type}</GenreHeader>
            <GenreContents>
                {movieList &&
                    Array.isArray(movieList) &&
                    movieList.map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
            </GenreContents>
        </GenreContainer>
    );
};

export default React.memo(Genre);
