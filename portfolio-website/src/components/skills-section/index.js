import React from "react";
import SkillsSlider from "../skill-slider";

const SkillsSection = () => {
    return (
        <div className="bg-image-dark padding-block">
            <div className="header">
                <h1>Skills</h1>
                <div className="red-divider"/>
            </div>
            <SkillsSlider />
        </div>
    )
}

export default SkillsSection