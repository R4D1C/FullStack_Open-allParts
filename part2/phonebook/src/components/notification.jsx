const Notification = ({ message, err }) => {
    if (message === null) {
        return null
    }

    const succNotifStyle = {
        color: 'green',
        fontStyle: 'sans-serif',
        fontSize: '24',
        border: '5px solid green',
        backgroundColor: 'lightgrey',
        borderRadius: '15px'
    }

    const errNotifStyle = {
        color: 'red',
        fontStyle: 'sans-serif',
        fontSize: '24',
        border: '5px solid red',
        backgroundColor: 'lightgrey',
        borderRadius: '15px'
    }

    const notifStyle = err ? errNotifStyle : succNotifStyle

    return (
        <div style={notifStyle}>
            <h3>{message}</h3>
        </div>
    )
}

export default Notification