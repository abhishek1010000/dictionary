import React, { createContext, useState } from 'react';

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const deletePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <PeopleContext.Provider value={{ people, addPerson, deletePerson }}>
      {children}
    </PeopleContext.Provider>
  );
};
