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
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa-4uIolh9b_JQkoxWNtBJXh4VteD0CSrm7vquPbsWftX1TOl4k5EvoPKZEfPlLdhG25LINS3Ra5NJw73vBFApSYAwAftAqYxIOe5Nf_luMIFSkmTA.webp?r=940';
const previewTitleSrc =
    'https://occ-0-1007-1361.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABeHQmcfN2eqyuRLTT4aCZthPoZEnl7BQZV6ZjGkSaaxxW3-Kh7S6aS1k6YEJAuCj_nkLxlHT27L7b-5BOu8GZQfoR_lsC4CzvpwAbs9CrMXVrKM4NaLYnWLrZedokZHYXDMLcRu_NFKV6GOPzwduDYbS_o0yRzPGK_MxcJTlyYw.webp?r=6df';
const previewTitle = 'money heist';
const previewSynopsis = `사상 최대의 무장강도를 치밀하게 계획해 온 '교수'. 잃을 것
                없는 8인을 지휘하여 스페인 조폐국에 침투시킨다. 인질까지
                잡았으니 이젠 독 안에 든 쥐가 될 차례.`;

// Netflix 오리지널 컴포넌트. API 결과에 따라 Netflix 오리지널이 아닐 수도 있음
const Originals = ({ page1, page2, page3, page4 }) => {
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
    넷플릭스 오리지널 시리즈 데이터를 가져옴.
    themoviedb에서 discover/tv에 해당하는 페이지 4개를 긁어옴.
    넷플릭스 오리지널 시리즈와 완벽히 일치하지 않을 수 있음.
 */
Originals.getInitialProps = async () => {
    const page1Response = axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const page2Response = axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2'
    );
    const page3Response = axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3'
    );
    const page4Response = axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=a264d351a4f7f43ff9d320735e17c308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4'
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

export default Originals;
