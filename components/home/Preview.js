import styled from 'styled-components/macro';
import SampleVideo from '../../static/videos/sample.mp4';

const PreviewContainer = styled.section`
    width: 100%;

    @media only screen and (min-width: 1024px) {
        height: 70%;
    }

    & > video {
        width: 100%;
        max-height: 80%;
    }
`;

const Preview = () => {
    return (
        <PreviewContainer>
            <video autoPlay muted loop>
                <source src={SampleVideo} type="video/mp4" />
            </video>
        </PreviewContainer>
    );
};

export default Preview;
