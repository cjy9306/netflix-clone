import styled from 'styled-components/macro';
import axios from 'axios';
import Genre from '../components/Genre';
import Preview from '../components/Preview';
import { useEffect } from 'react';

const RootContainer = styled.div`
    background-color: #141414;
    padding-left: 60px;
`;

const previewImage =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbI14YS-mSKO1gaApBmYkc3W1ppHHbxlLiVExx6OB4AH5R1qEUf6n1JtSmuU27LuP2CGLaVq7NMPWNNfwhFfJ0vRvq5R.webp?r=72d';
const previewTitleSrc =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABdeb24QUqMJZ2RjLna27wPPWiAZyXdcuHcXiLhHeAc3wfoP6duQX8rVqDdCsabWEB1d0tAGH74dKlWWbd6L_YLiuqgk5OeZ6TJfw.webp?r=c34';
const previewTitle = 'warcraft';
const previewSynopsis = `공존인가, 대립인가. 선택의 갈림길에 선 인간과 오크. 평화를 지키는 방법은 서로의 믿음뿐. 그러나 내부 분열로 더 큰 혼란이 야기되고, 전장의 살육은 멈출 줄 모른다.`;

const Movies = ({ page1, page2, page3, page4 }) => {
    const options = { threshold: 0.01 };
    let observer = null;

    useEffect(() => {
        // for lazy image
        if (window && 'IntersectionObserver' in window) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        entry.target.src = entry.target.dataset.src;
                    }
                });
            }, options);

            const lazyElements = document.querySelectorAll('.lazy-image');
            lazyElements.forEach((element) => observer.observe(element));
        }
    }, []);

    return (
        <>
            <Preview
                previewImage={previewImage}
                previewTitleSrc={previewTitleSrc}
                previewTitle={previewTitle}
                previewSynopsis={previewSynopsis}
            />
            <RootContainer>
                <Genre type="인기 콘텐츠" movieList={page1.results} />
                <Genre type="지금 뜨는 콘텐츠" movieList={page2.results} />
                <Genre type="다시보기 추천 콘텐츠" movieList={page3.results} />
                <Genre type="신규 콘텐츠" movieList={page4.results} />
            </RootContainer>
        </>
    );
};

Movies.getInitialProps = async () => {
    const page1Response = axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&page=1'
    );
    const page2Response = axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&page=2'
    );
    const page3Response = axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&page=3'
    );
    const page4Response = axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&page=4'
    );

    const [page1, page2, page3, page4] = await axios.all([
        page1Response,
        page2Response,
        page3Response,
        page4Response,
    ]);

    return {
        page1: page1.data,
        page2: page2.data,
        page3: page3.data,
        page4: page4.data,
    };
};

export default Movies;
