import { Btn } from "./Button.styled";

export const Button = ({ text, name, handleClicks }) => {
    return <>
        <Btn onClick={handleClicks} data-name={name}>{text}</Btn>
    </>
}