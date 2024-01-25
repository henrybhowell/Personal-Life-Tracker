import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

const EditExercise = () => {
  const { id } = useParams();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/exercises/${id}`)
      .then(response => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:3000/users/')
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
        }
      });
  }, [id]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    console.log(exercise);

    axios.post(`http://localhost:3000/exercises/update/${id}`, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  };

  return (
    <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select useref="userInput"
                        required
                        className='form-control'
                        value={username}
                        onChange={onChangeUsername}>
                        {  
                        // getting options from user array using JS
                        // map returns each user in the array
                            users.map(function(user) {
                                return <option
                                    key={user}
                                    value = {user}> 
                                    {user}
                                    </option>
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input type="text"
                       required
                       className='form-control'
                       value={description}
                       onChange={onChangeDescription}/>
                </div>
                <div className='form-group'>
                    <label>Duration: </label>
                    <input type="text"
                       required
                       className='form-control'
                       value={duration}
                       onChange={onChangeDuration}/>
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={date}
                        onChange={onChangeDate}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <input type="submit" value="Edit Exercise Log" className='btn btn-primary' />
                </div>
            </form>
        </div>
  );
};

export default EditExercise;

