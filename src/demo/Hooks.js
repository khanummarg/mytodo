import React, { useState, useEffect, useRef } from "react";

export default function Hooks() {
 
  const [values, setValues] = useState({
    name: '',
    surname: '',
    info: {
      address: 'Yerevan',
      age: 15
    }
  });

  const elemRef = useRef();

  console.log('elemRef', elemRef)
  //componentDidMount, conponentDidUpdate

  // useEffect(() =>{
  //   console.log('useEffect');
  // })




   //componentDidMount, conponentDidUpdate

  //  useEffect(() =>{
  //   console.log('useEffect');
  // }, [values]);


 //componentDidMount

//  useEffect(() =>{
//   console.log('useEffect');
// }, []);




//componentDidMount

useEffect(() =>{
  console.log('useEffect');

  return ()=> {
    console.log('componentWillUnmount')
  }
}, []);

  return (
    <div>
      <input
        ref = {elemRef}
        type="text"
        value={values.name}
        onChange={(event) => {
          setValues({
            ...values,
            name: event.target.value
          });
        }}
      />
      <input
        type="text"
        value={values.surname}
        onChange={(event) => {
          setValues({
            ...values,
            surname:event.target.value
          });
        }}
      />
      <input
        type="text"
       
        onChange={(event) => {
          setValues({
            ...values,
            info: {
            ...values.info,
            address:event.target.value
            }
          });
        }}
      />
     
    </div>
  );
}
