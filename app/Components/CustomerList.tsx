import React from 'react';
import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3 className='text-lg font-medium my-2 ' >{customer.name}</h3>
          <p className='text-sm  my-2 '>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
