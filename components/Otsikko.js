import React from 'react'

const Otsikko = ({ nimi }) => {
console.log("Otsikko", nimi)
  return (
    <h1>{nimi}</h1>
  )
}

export default Otsikko