import './style.css'

function Message(props) {
    const msg = props.msg;
    return (
        <div className="wrapper">
            {msg}
        </div>
    );
}

export default Message;