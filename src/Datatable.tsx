import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import Data from './Data/Data'
import Columns from './Data/Columns'

export default function Datatable() {


    const [searchTerm, setSearchTerm] = useState("")
    const [filteredText, setFilteredText] = useState(Data)
    const [searchDirector, setSearchDirector] = useState("")

    useMemo(() => {
        let localFilteredText = Data

        if (searchTerm !== "")
            localFilteredText = localFilteredText.filter(
                (item: any) =>
                    JSON.stringify(item.title)
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) !== -1
            )


        if (searchDirector !== "")
            localFilteredText = localFilteredText.filter(
                (item: any) =>
                    JSON.stringify(item.director)
                        .toLowerCase()
                        .indexOf(searchDirector.toLowerCase()) !== -1
            )


        setFilteredText(localFilteredText)

    }, [searchTerm, searchDirector])


    return (
        <>
            <input placeholder='search term' onChange={(e) => {
                setSearchTerm(e.target.value)
            }} />


            <input placeholder='search director' onChange={(e) => {
                setSearchDirector(e.target.value)
            }} />

            <DataTable
                columns={Columns}
                data={filteredText}
                pagination
            />
        </>
    )
}
