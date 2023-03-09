import { Btn } from "./Button.styled";

export const Button = ({ text, handleClicks }) => {
    return <>
        <Btn onClick={handleClicks}>{text}</Btn>
    </>
}