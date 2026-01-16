import React from 'react';
import {
    MdKeyboardArrowDown,
    MdLocationOn,
    MdLanguage,
    MdSchool,
    MdMail,
    MdVisibility,
    MdCode,
    MdArrowForward,
    MdSend,
    MdShare,
    MdHelpOutline
} from 'react-icons/md';
import { HiArrowUpRight } from "react-icons/hi2";


const IconMapper = ({ iconName = '', className, style }) => {

    // Safety first: Trim and clean.
    const cleanName = iconName.trim().toLowerCase();

    // Initialize with a default fallback component
    let IconComponent = MdHelpOutline;

    // Switch Case with exact string matches
    switch (cleanName) {
        case 'keyboard_arrow_down':
            IconComponent = MdKeyboardArrowDown;
            break;
        case 'location_on':
            IconComponent = MdLocationOn;
            break;
        case 'language':
            IconComponent = MdLanguage;
            break;
        case 'school':
            IconComponent = MdSchool;
            break;
        case 'mail':
            IconComponent = MdMail;
            break;
        case 'visibility':
            IconComponent = MdVisibility;
            break;
        case 'code':
            IconComponent = MdCode;
            break;
        case 'arrow_forward':
            IconComponent = MdArrowForward;
            break;
        case 'arrow_outward':
            IconComponent = HiArrowUpRight;
            break;
        case 'send':
            IconComponent = MdSend;
            break;
        case 'share':
            IconComponent = MdShare;
            break;
        default:
            IconComponent = MdHelpOutline;
            break;
    }

    // Render the dynamically assigned component
    return <IconComponent className={className} style={style} />;
};

export default IconMapper;
