import React, { createContext, useContext, useState } from 'react';
import { 
  personalInfo, 
  skillCategories, 
  allSkills, 
  strengths, 
  projects, 
  education, 
  certifications 
} from '../data';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data] = useState({
    personalInfo,
    skillCategories,
    allSkills,
    strengths,
    projects,
    education,
    certifications
  });

  // Example logic utilizing filter: Get skills associated with a specific category
  const getSkillsByCategory = (categoryId) => {
    return data.allSkills.filter(skill => skill.categoryId === categoryId);
  };

  // Example logic utilizing find: Get a specific category by ID
  const getCategoryById = (categoryId) => {
    return data.skillCategories.find(cat => cat.id === categoryId);
  };

  // Example logic utilizing find: Get a specific project by title
  const getProjectByTitle = (title) => {
    return data.projects.find(project => project.title === title);
  };

  return (
    <PortfolioContext.Provider value={{
      ...data,
      getSkillsByCategory,
      getCategoryById,
      getProjectByTitle
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};
