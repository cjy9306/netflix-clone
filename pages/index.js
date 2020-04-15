import styled from 'styled-components/macro';
import axios from 'axios';
import Genre from '../components/Genre';
import Preview from '../components/Preview';
import { useEffect } from 'react';

const RootContainer = styled.div`
    background-color: #141414;
    padding-left: 60px;
`;

const Home = ({ recommend, original, topRated, trend }) => {
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
            <Preview />
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
