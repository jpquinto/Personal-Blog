
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

interface IconProps {
    icon: IconDefinition;
}

export const Icon = ({ icon }: IconProps) => {
    return (
        <FontAwesomeIcon 
            icon={icon} 
            className="h-9 w-9 my-auto text-[#25292d] hover:text-[#99a8be] transition-colors" 
        />
    )
}