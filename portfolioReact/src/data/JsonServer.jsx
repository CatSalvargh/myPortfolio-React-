import React from "react"
import { useState } from "react"
import { useEffect } from "react"


function JsonServer(props) {

  const dataName = props.section.toLowerCase();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/${dataName}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data);
    })
    .catch(err => console.log(err))
  })

  return setData;

}

export default JsonServer 