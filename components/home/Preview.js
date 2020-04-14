import styled from 'styled-components/macro';
import Image from '../../static/images/money-heist.jpg';

const PreviewContainer = styled.section`
    width: 100%;
    height: 43.25vw;
`;

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 56.25vw;
    background-size: cover;
`;

const GradientBackground = styled.div`
    position: absolute;
    top: auto;
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

const Preview = () => {
    return (
        <PreviewContainer>
            <BackgroundImage src={Image} />
            <GradientBackground />
        </PreviewContainer>
    );
};

export default Preview;
