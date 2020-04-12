import styled from 'styled-components/macro';
import Movie from './Movie';

const GenreContainer = styled.section`
    color: white;
    margin-bottom: 48px;
    postition: relative;
    z-index: 4;
`;

const GenreHeader = styled.div``;

const GenreContents = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`;

const Genre = ({ type, movieList }) => {
    return (
        <GenreContainer>
            <GenreHeader>
                <h1>{type}</h1>
            </GenreHeader>
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
