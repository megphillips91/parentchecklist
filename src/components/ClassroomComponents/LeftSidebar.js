import React from 'react';
import ClassAssignments from '../ClassAssignments.js';
import ContentCard from '../ContentCard.js';

export default function LeftSidebar(section) {
    console.log(section)
    return (
        <ContentCard
            mainTitle={section.schools+" "+ section.teachers}
            subTitle={section.grades+" "+ section.subjects}
            button="door-open"
        >
            <ClassAssignments 
                section={section}
            ></ClassAssignments>
        </ContentCard>
    )
}
