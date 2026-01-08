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
    MdHelpOutline // Added a fallback icon
} from 'react-icons/md';


const IconMapper = ({ iconName = '', className, style }) => {
    
    // 2. Safety first: Trim and clean. Using default param '' prevents .replace() error
    const cleanName = iconName.replace('material-symbols-outlined', '').trim();

    // 3. Initialize with a default fallback component
    let IconComponent = MdHelpOutline; 

    // 4. Switch Case with exact string matches
    switch (cleanName) {
        case 'keyboard_arrow_down': // Note: case-sensitivity matters
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

    // 5. Render the dynamically assigned component
    return <IconComponent className={className} style={style} />;
};

export default IconMapper;
