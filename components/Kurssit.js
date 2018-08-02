import React from 'react'
import Kurssi from './Kurssi'
import Otsikko from './Otsikko'

const Kurssit = ({kurssit}) => {
    console.log("Kurssit", kurssit)
    return (
        <div>
            <Otsikko nimi="Opetusohjelma" />
            {kurssit.map( kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>) }
        </div>
    )
}

export default Kurssit