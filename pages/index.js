/* 넷플릭스 클론 사이트의 메인 페이지 */
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
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWZXwedGPs1rOcEUc4r-4HsJqQPID9dCF6f15JGzb7maXNhMkHDJ7C9pkD5sSfnIuDfUiW7njuSSJIqjM22Z9DoHd7_aaZy6WfmIOmDAyJZH6vtfjg.jpg?r=940';
const previewTitleSrc =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABZdzv4Hk_wd-VMRVOtg5lI2QQGhQoQoRQQN6CPup9OmTHLnmG3VUpRgx-3Bf3eLMH-lsgKvnAjl9LzIJ2XlTe5ob41wHArk2BgN0rKoHj4Z2XNYST-QUGHFkNLe5lxOsOPI-tHakFqhXXMO-zictPfehOHrAYh9cDytqxHy4g1g.png?r=6df';
const previewTitle = 'money heist';
const previewSynopsis = `사상 최대의 무장강도를 치밀하게 계획해 온 '교수'. 잃을 것
                없는 8인을 지휘하여 스페인 조폐국에 침투시킨다. 인질까지
                잡았으니 이젠 독 안에 든 쥐가 될 차례.`;

const Home = ({ recommend, original, topRated, trend }) => {
    const options = { threshold: 0.01 };
    let observer = null;

    // 이미지를 lazy loading하기 위해 IntersectionObserver에 등록
    useEffect(() => {
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
                <Genre type="인기 콘텐츠" movieList={recommend.results} />
                <Genre type="넷플릭스 오리지널" movieList={original.results} />
                <Genre
                    type="다시보기 추천 콘텐츠"
                    movieList={topRated.results}
                />
                <Genre type="지금 뜨는 콘텐츠" movieList={trend.results} />
            </RootContainer>
        </>
    );
};

/* 
    모든 장르 및 종류 별 영화를 가져옴.
    기본적으로 4개의 장르 및 종류만 데이터를 themoivedb에서 가져옴
 */
Home.getInitialProps = async () => {
    const recommendResponse = axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const originalResponse = axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const topRatedResponse = axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&page=1'
    );
    const trendResponse = axios.get(
        'https://api.themoviedb.org/3/trending/all/week?api_key=a264d351a4f7f43ff9d320735e17c308'
    );

    const [recommend, original, topRated, trend] = await axios.all([
        recommendResponse,
        originalResponse,
        topRatedResponse,
        trendResponse,
    ]);

    return {
        recommend: recommend.data,
        original: original.data,
        topRated: topRated.data,
        trend: trend.data,
    };
};

export default Home;
