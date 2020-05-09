import styled from 'styled-components';
import axios from 'axios';
import Genre from '../components/Genre';
import Preview from '../components/Preview';
import { useEffect } from 'react';

const RootContainer = styled.div`
    background-color: #141414;
    padding-left: 60px;
`;

const previewImage =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbLwif-19NK3tQK715puU1doVGXPLCfJLlowbcuTvz4l4t_3OxhqygyrCJhz9MOyA5e9Fnp3cTuEc6burNDWl6aws_jQ.jpg?r=72d';
const previewTitleSrc =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABU3ace_PhPJ0wJromUmdZGLz2pukydaFdBR9KsGbJJN1ZxiZv3EKOwlP-2N4VWTNzds4DKrSdR9Jjya9VwLdz64krTP4gmAyWw-_.png?r=c34';
const previewTitle = 'warcraft';
const previewSynopsis = `공존인가, 대립인가. 선택의 갈림길에 선 인간과 오크. 평화를 지키는 방법은 서로의 믿음뿐. 그러나 내부 분열로 더 큰 혼란이 야기되고, 전장의 살육은 멈출 줄 모른다.`;

// 영화 리스트 페이지
const Movies = ({ page1, page2, page3, page4 }) => {
    const options = { threshold: 0.01 };
    let observer = null;

    // 이미지를 lazy loading하기 위해 IntersectionObserver에 등록
    useEffect(() => {
        // 서버에서는 window 객체가 없으므로 필터링 작업 필요
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

/* 
    평점이 높은 순서대로 영화 리스트를 긁어옴.
    themoviedb에서 movie/top_rated에 해당하는 페이지 4개를 긁어옴.
 */
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
