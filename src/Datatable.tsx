import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import Data from './Data/Data'
import Columns from './Data/Columns'

export default function Datatable() {


    const [searchTerm, setSearchTerm] = useState("")
    const [filteredText, setFilteredText] = useState(Data)

    useMemo(() => {
        let localFilteredText = Data

        if (searchTerm !== "")
            localFilteredText = localFilteredText.filter(
                (item: any) =>
                    JSON.stringify(item.title)
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) !== -1
            )



        setFilteredText(localFilteredText)

    }, [searchTerm])


    return (
        <>
            <input placeholder='search' onChange={(e) => {
                setSearchTerm(e.target.value)
            }} />


            <DataTable
                columns={Columns}
                data={filteredText}
                pagination
            />
        </>
    )
}
