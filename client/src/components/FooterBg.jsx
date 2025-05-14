import React from "react";

const FooterBg = ({children}) => {
    const getBackgroundImage = () => {
        return "https://unsplash.com/photos/photography-of-body-of-water-xasFNyOvUBMhttps://unsplash.com/photos/photography-of-body-of-water-xasFNyOvUBM"
    };

    return (
        <div
            style={{
                background:`url(${getBackgroundImage()}) center/cover fixed`,
                color: 'var(--light)'
            }}
        >
            {children}
        </div>
    );
};
export default FooterBg;