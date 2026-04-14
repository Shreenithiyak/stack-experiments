import React, { createContext, useContext } from 'react';

const CompanyContext = createContext();

export const useCompany = () => useContext(CompanyContext);

const defaultCompanies = [
  { abbreviation: "TCS", fullName: "TCS" },
  { abbreviation: "INFY", fullName: "Infosys" },
  { abbreviation: "WIPRO", fullName: "Wipro" },
  { abbreviation: "ACC", fullName: "Accenture" },
  { abbreviation: "GOOG", fullName: "Google" },
  { abbreviation: "AMZN", fullName: "Amazon" },
  { abbreviation: "MSFT", fullName: "Microsoft" },
  { abbreviation: "ZOHO", fullName: "Zoho" },
  { abbreviation: "META", fullName: "Meta" },
  { abbreviation: "AAPL", fullName: "Apple" },
  { abbreviation: "NFLX", fullName: "Netflix" },
  { abbreviation: "IBM", fullName: "IBM" },
  { abbreviation: "ORCL", fullName: "Oracle" },
  { abbreviation: "CSCO", fullName: "Cisco" },
  { abbreviation: "TSLA", fullName: "Tesla" },
  { abbreviation: "INTC", fullName: "Intel" },
  { abbreviation: "SPOT", fullName: "Spotify" },
  { abbreviation: "TEAM", fullName: "Atlassian" },
  { abbreviation: "UBER", fullName: "Uber" },
  { abbreviation: "ABNB", fullName: "Airbnb" },
  { abbreviation: "SNOW", fullName: "Snowflake" },
  { abbreviation: "CRM", fullName: "Salesforce" },
  { abbreviation: "PLTR", fullName: "Palantir" },
  { abbreviation: "STR", fullName: "Stripe" }
];

export const CompanyProvider = ({ children }) => {
  return (
    <CompanyContext.Provider value={{ companies: defaultCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};
