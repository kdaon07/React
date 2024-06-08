import Draggable from 'react-draggable';

const ImageBox = ({ src }) => {
    return (
        <Draggable>
            <div className="ImageBox">
                <img src={src} alt="uploaded" />
            </div>
        </Draggable>
    );
}

export default ImageBox;
