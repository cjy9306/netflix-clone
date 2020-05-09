import styled from 'styled-components';
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
    font-weight: bold;
`;

const GenreContents = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`;

// 장르를 나타내는 컴포넌트. 예를 들어, 넷플릭스 오리지널, 최신 콘텐츠, 영화 등 영화들을 묶는 그룹
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
