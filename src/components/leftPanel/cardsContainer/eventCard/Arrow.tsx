import React, {ReactElement} from "react";

interface props {
    color: string;
    opacity?: string;
}

const Arrow = ({ color, opacity }: props): ReactElement => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <path
                    d="M10.0234 19.355L15.3668 14L10.0234 8.645L11.6684 7L18.6684 14L11.6684 21L10.0234 19.355Z"
                    fill={color}
                    fillOpacity={opacity}
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(0 28) rotate(-90)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Arrow;