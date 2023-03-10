import { Title } from "./Title/Title";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return <>
        <Title title={title}></Title>
        {children}
    </>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes
}