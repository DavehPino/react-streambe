import styled from 'styled-components'

const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Header = styled.h3`
    align-self: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`

const Input = styled.input`
    padding: 0.5rem;
    ::placeholder {
        color: rgba(173, 173, 173, 1);
    }
    border: 2px solid rgba(196, 196, 196, 1);
    border-radius: 0 5px 5px 0;
`

const Button = styled.button`
    background-color: rgba(218, 78, 78, 1);
    color: rgba(255, 255, 255, 1);
    padding: 0.5rem;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(225, 45, 45, 1);
    &:hover {
        background-color: rgba(185, 39, 39, 1);
    }
`
const ErrorText = styled.p`
    font-weigth: 600;
    font-size: 1rem;
    color: red;
`

export {AuthContainer, Header, Form, Input, Button, ErrorText}