'use client';
import React, { useState } from 'react';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';
import { Customer } from './types';

const customersData: Customer[] = [
  { id: 1, name: 'John Doe', title: 'Senior Software Engineer at Tech Corp with over a decade of experience in developing high-performance enterprise solutions for global clients' },
  { id: 2, name: 'Jane Smith', title: 'Marketing Manager at Creative Solutions, specializing in digital marketing strategies, brand development, and client engagement across multiple industries' },
  { id: 3, name: 'Alice Johnson', title: 'Project Manager at InnovateX, leading cross-functional teams to deliver complex projects on time and within budget, ensuring stakeholder satisfaction' },
  { id: 4, name: 'Bob Brown', title: 'Lead Designer at Design Studio, with a strong background in user-centered design, visual storytelling, and creating impactful user experiences' },
  { id: 5, name: 'Charlie Davis', title: 'Chief Financial Officer at FinCorp, responsible for overseeing financial operations, strategic planning, and ensuring the financial stability of the organization' },
  { id: 6, name: 'Diana Miller', title: 'Human Resources Director at PeopleFirst, focusing on talent acquisition, employee development, and creating a positive workplace culture' },
  { id: 7, name: 'Ethan Wilson', title: 'Data Scientist at Data Insight, utilizing advanced analytics, machine learning, and data-driven decision-making to solve complex business problems' },
  { id: 8, name: 'Fiona Garcia', title: 'Product Manager at NextGen Solutions, driving product innovation, market analysis, and cross-functional collaboration to bring new products to market' },
  { id: 9, name: 'George Martinez', title: 'Head of Operations at Global Trade, managing supply chain logistics, operational efficiency, and international trade compliance across multiple regions' },
  { id: 10, name: 'Hannah Lee', title: 'Software Architect at CodeWorks, designing scalable software architectures, leading development teams, and ensuring high-quality code standards are maintained' },
  { id: 11, name: 'Isaac White', title: 'Content Strategist at Media Hub, crafting content strategies, optimizing digital campaigns, and enhancing brand presence through targeted content marketing' },
  { id: 12, name: 'Jack Taylor', title: 'Business Analyst at Enterprise Group, conducting market research, data analysis, and providing actionable insights to drive business growth and profitability' },
  { id: 13, name: 'Karen Walker', title: 'UX/UI Designer at Creative Edge, creating intuitive user interfaces, enhancing user engagement, and delivering seamless digital experiences for diverse platforms' },
  { id: 14, name: 'Liam Harris', title: 'Chief Technology Officer at Tech Innovators, leading technology strategy, innovation, and overseeing the development of cutting-edge software solutions' },
  { id: 15, name: 'Mia Thompson', title: 'Sales Director at SalesForce, developing sales strategies, managing key accounts, and driving revenue growth through effective team leadership and client relationship management' },
  // Add more customers as needed
];
const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(customersData[0].id);

  const selectedCustomer = customersData.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app-container">
      <CustomerList
        customers={customersData}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}

    </div>
  );
};

export default App;

