import React from 'react'


interface ButtonFetchUsers {
click: () => void
}

const ButtonFetchUsers = (props:ButtonFetchUsers) => {
    return (
        <button style={{
            padding: '10px 20px',
            border: '2px solid black',
            backgroundColor: 'white',
            margin: '20px'
        }} onClick={props.click}>Dodaj 5
        uzytkowników</button>
    );
}

export default ButtonFetchUsers;