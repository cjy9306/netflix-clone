/* 
    각 페이지의 프리뷰에 해당하는 컴포넌트
    각 페이지의 대표 영화 혹은 프로그램의 이미지와 제목, 설명을 보여줌
*/
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';

const PreviewContainer = styled.section`
    width: 100%;
    height: 43.25vw;
`;

const PreviewImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 56.25vw;
    background-size: cover;
`;

const PreviewContents = styled.div`
    position: absolute;
    padding-left: 60px;
    top: 10vw;
    color: white;
`;

const PreviewTitle = styled.img`
    width: 30vw;
    margin-bottom: 36px;
`;

const PreviewSubTitle = styled.div`
    font-size: 1.275vw;
    line-height: 1.6;
    width: 30vw;
    margin-bottom: 36px;
`;

const PlayButton = styled.button`
    background-color: #e50914;
    border-color: #e50914;
    font-size: 1vw;
    font-weight: bold;
    color: #fff;
    line-height: 1.6;
    margin-right: 16px;
    padding: 0.57em 1.35em;
`;

const CustomIcon = styled(FontAwesomeIcon)`
    width: 1vw;
    height: 1vw;
    color: white;
    margin-right: 16px;
`;

const MyContentsButton = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    font-size: 1vw;
    font-weight: bold;
    line-height: 1.6;
    padding: 0.57em 1.35em;
`;

const GradientBackground = styled.div`
    position: absolute;
    top: 41.7vw;
    bottom: 6vw;
    opacity: 1;
    width: 100%;
    height: 14.7vw;
    z-index: 4;
    background-repeat: repeat-x;
    background-color: transparent;
    background-position: 0 top;
    background-size: 100% 100%;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(20, 20, 20, 0)),
        color-stop(15%, rgba(20, 20, 20, 0.15)),
        color-stop(29%, rgba(20, 20, 20, 0.35)),
        color-stop(44%, rgba(20, 20, 20, 0.58)),
        color-stop(68%, #141414),
        to(#141414)
    );
    background-image: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0) 0%,
        rgba(20, 20, 20, 0.4) 15%,
        rgba(20, 20, 20, 0.5) 29%,
        rgba(20, 20, 20, 0.7) 44%,
        #141414 68%,
        #141414 100%
    );
`;

const Preview = ({
    previewImage,
    previewTitleSrc,
    previewTitle,
    previewSynopsis,
}) => {
    return (
        <PreviewContainer>
            <PreviewImage src={previewImage} alt="money heist image" />
            <PreviewContents>
                <PreviewTitle
                    src={previewTitleSrc}
                    alt={`${previewTitle} image`}
                />
                <PreviewSubTitle>{previewSynopsis}</PreviewSubTitle>
                <PlayButton>
                    <CustomIcon icon={faPlay} size="xs" />
                    재생
                </PlayButton>
                <MyContentsButton>
                    <CustomIcon icon={faCheck} size="xs" />
                    내가 찜한 콘텐츠
                </MyContentsButton>
            </PreviewContents>
            <GradientBackground />
        </PreviewContainer>
    );
};

export default Preview;
