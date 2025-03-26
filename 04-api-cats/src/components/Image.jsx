import PropTypes from 'prop-types';

export function Image({catImage}) {

    return (
        <>
            {catImage && <img src={catImage} alt="some image from a f*cking cat" />}
        </>
    )
}

Image.propTypes = {
    catImage: PropTypes.string
};
