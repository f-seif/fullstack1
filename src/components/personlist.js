import Personcard from './personcard';
import React, { useEffect, useState } from "react";
import axios from "axios";

function Personlist() {

  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState(0);
  const [file, setFile] = useState('');
  const baseURL = 'http://localhost:5000/personschema';

  function deleteCard(id){
    //setList(prevList => prevList.filter(element => element._id !== id))
    axios.delete(`http://localhost:5000/personschema/${id}`)
      .then(function () {
        console.log('deleted');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setList(response.data.data)
        }).catch(function (error) {
            console.error(error);
        })
    }, [list]);

    // const AddPerson = (e) => {
    //   e.preventDefault();
    //   setData({...data, [e.target.name] : e.target.value})
    
    // }

    function handleSubmit(e){
      e.preventDefault()
     const data = new FormData()
     data.append('name', name)
     data.append('age', age)
     data.append('mail', mail)
     data.append('photo', file)
     
      axios.post(baseURL, data)
      .then(function () {
        console.log('success');
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
      <>
        <div className="m-2">
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal">Add person card</button>
        </div>
        <div id="modal" className="modal fade" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter new person details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form className="modal-body" name="newMovieForm" onSubmit={handleSubmit} encType="multipart/form-data">
                  <input type="text" name="name" className="form-control mb-2" placeholder="Enter person name" aria-label="" onChange={(e) => {setName(e.target.value)}} />
                  <input type="text" name="mail" className="form-control mb-2" placeholder="Enter person mail" aria-label="" onChange={(e) => {setMail(e.target.value)}} />
                  <input type="number" name="age" className="form-control mb-2" placeholder="Enter person age" aria-label="" onChange={(e) => {setAge(e.target.value)}} />
           
                  <input type="file" name="file" className="form-control mb-2" placeholder="Enter photo" aria-label="" onChange={(e) => {setFile(e.target.files[0])}}/>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="sc" type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="row">
            {
              list.map((el, i) => <Personcard key={i} cardProps={el}
              list = {list}
              deleteCard = {deleteCard(el._id)}
              />)
            }
          </div>
        </div>
      </>
    );
  }
  
  export default Personlist;