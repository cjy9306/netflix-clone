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
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdchrxNxK8jhUw9MWJvnsezbFxzQyl6cIXai3hVamJdLcHvPWvQrjmVEc3inUVt1d2JA6_R9uKfakQu4zFptV378Pr2-.jpg?r=048';
const previewTitleSrc =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABd-7iPy8CQ95U_Xjm-xFlTE-DVEKCtINBlbXP24444y_RXCS9EQrLT4Ov0BeKqd-BT_7wD3smhQ9P_FcKYJtuj6jmlTDG9JFKw.png?r=e74';
const previewTitle = 'money heist';
const previewSynopsis = `내 이름은 코너. 초능력을 타고난 탓에 세상이 배척하는 존재가 됐지. 영웅이 될 수 없는 능력이라면, 아픈 어머니를 위해서라도 써야겠다. 그 어떤 대가를 치르더라도.`;

// 최신 넷플릭스 컨텐츠를 보여주는 페이지
const Recent = ({ page1, page2, page3, page4 }) => {
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
                <Genre type="인기 콘텐츠" movieList={page1.results} />
                <Genre type="지금 뜨는 콘텐츠" movieList={page2.results} />
                <Genre type="다시보기 추천 콘텐츠" movieList={page3.results} />
                <Genre type="신규 콘텐츠" movieList={page4.results} />
            </RootContainer>
        </>
    );
};

/* 
    !! 최신 컨텐츠 api에 최신 컨텐츠가 많이 없어 임시적으로 영화 시리즈를 가저옴
    themoviedb에서 discover/movie에 해당하는 페이지 4개를 긁어옴.
 */
Recent.getInitialProps = async () => {
    const page1Response = axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const page2Response = axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2'
    );
    const page3Response = axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3'
    );
    const page4Response = axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4'
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

export default Recent;
