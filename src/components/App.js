import React from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function App() {
  return (
    <div className="container" style={{ marginTop: '150px' }}>
        <div className="row">
          <div className="col-lg-6">
            <PostForm />
          </div>
          <div className="col-lg-6">
            <AllPost />
          </div>
        </div>
      </div>
  );
}

export default App;
