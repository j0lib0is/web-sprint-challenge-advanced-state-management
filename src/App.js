import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// Actions
import { fetchSmurfs } from './actions';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ dispatch })=> {

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

  return (
    <div className='App'>
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
}

export default connect()(App);

//Task List:
//1. ✅ Connect the fetchSmurfs actions to the App component.
//2. ✅ Call the fetchSmurfs action when the component mounts.