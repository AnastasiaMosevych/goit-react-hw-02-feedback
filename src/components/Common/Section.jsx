import { Title } from "./Title/Title"

export const Section = ({ title, children }) => {
    return <>
        <Title title={title}></Title>
        {children}
    </>
}