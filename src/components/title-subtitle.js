import React from 'react';
import PropTypes from 'prop-types';
import './TitleComponent.css';  // Import your CSS file

const TitleComponent = ({ title, subtitle, customClass }) => {
    return (
        <div className={`mx-auto ${customClass}`}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};

TitleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    customClass: PropTypes.string,
};

export default TitleComponent;