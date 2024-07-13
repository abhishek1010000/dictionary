import { createContext, useState, useEffect } from 'react';

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState(() => {
    const storedPeople = localStorage.getItem('people');
    return storedPeople ? JSON.parse(storedPeople) : [];
  });

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const addPerson = (person) => {
    setPeople((prevPeople) => [...prevPeople, person]);
  };

  const deletePerson = (index) => {
    setPeople((prevPeople) => prevPeople.filter((_, i) => i !== index));
  };

  return (
    <PeopleContext.Provider value={{ people, addPerson, deletePerson }}>
      {children}
    </PeopleContext.Provider>
  );
};
