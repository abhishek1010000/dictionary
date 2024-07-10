import { useState, useContext } from 'react';
import { PeopleContext } from '../PeopleContext';
import './AddInfo.css';

const AddInfo = () => {
  const { people, addPerson, deletePerson } = useContext(PeopleContext);
  const [inputsVisible, setInputsVisible] = useState(false);
  const [newPerson, setNewPerson] = useState({
    name: '',
    dob: '',
    aadhar: '',
    mobile: '',
    age: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddClick = () => {
    setInputsVisible(true);
  };

  const handleSaveClick = () => {
    if (newPerson.name === '' || newPerson.dob === '' || newPerson.aadhar === '' || newPerson.mobile === '' || newPerson.age === '') {
      setError('All fields are required.');
      return;
    }
    addPerson(newPerson);
    setNewPerson({ name: '', dob: '', aadhar: '', mobile: '', age: '' });
    setInputsVisible(false);
    setError('');
  };

  return (
    <div className="addInfo">
      <div>
        <h4 className="page-title">Add New Person</h4>
      </div>
      {error && <div className="error">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.dob}</td>
              <td>{person.aadhar}</td>
              <td>{person.mobile}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => deletePerson(index)}>Delete</button>
              </td>
            </tr>
          ))}
          {inputsVisible && (
            <tr>
              <td><input type="text" name="name" value={newPerson.name} onChange={handleChange} /></td>
              <td><input type="date" name="dob" value={newPerson.dob} onChange={handleChange} /></td>
              <td><input type="text" name="aadhar" value={newPerson.aadhar} onChange={handleChange} /></td>
              <td><input type="text" name="mobile" value={newPerson.mobile} onChange={handleChange} /></td>
              <td><input type="number" name="age" value={newPerson.age} onChange={handleChange} /></td>
              <td><button onClick={handleSaveClick}>Save</button></td>
            </tr>
          )}
        </tbody>
      </table>
      {!inputsVisible && <button className="addBtn" onClick={handleAddClick}>Add</button>}
    </div>
  );
};

export default AddInfo;
