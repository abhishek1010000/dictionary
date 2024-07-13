import { useState, useContext } from 'react';
import { PeopleContext } from '../PeopleContext';
import './Retrieve.css';

const Retrieve = () => {
  const { people } = useContext(PeopleContext);
  const [aadhar, setAadhar] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setAadhar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = people.find(p => p.aadhar === aadhar);
    setResult(person || 'No Data');
  };

  return (
    <div className="retrieve">
      <div>
        <h4 className="page-title">Retrieve Information</h4>
      </div>
      <div className="find">
        <form className="find-form" onSubmit={handleSubmit}>
          <input type="number" className="search-aadhar" value={aadhar} onChange={handleChange} />
          <input type="submit" value="Find" className="find-btn" />
        </form>
      </div>
      <div className="result">
        {result ? (
          result === 'No Data' ? (
            <h1>No Data</h1>
          ) : (
            <div>
              <h1>Data Found</h1>
              <p>Name: {result.name}</p>
              <p>Date of Birth: {result.dob}</p>
              <p>Aadhar Number: {result.aadhar}</p>
              <p>Mobile Number: {result.mobile}</p>
              <p>Age: {result.age}</p>
            </div>
          )
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </div>
  );
};

export default Retrieve;
