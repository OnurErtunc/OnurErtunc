import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'



interface Document {
    id: string,
    title: string,
    lastModified: string,
}

const DocumentsPage = () => {

    const [documents, setDocuments] = useState<Document[]>([]);

    const columns = [
        { field: 'id', header: 'Id' },
        { field: 'title', header: 'Title' },
        { field: 'lastModified', header: 'Last Modified' },
    ]

    useEffect(() => {
        import('../../data/MockDocumentData').then(data => setDocuments(data.default))
    }, [])

    return (
        <>
            <div className="col-12">
                <div className='card'>
                    <DataTable value={documents} tableStyle={{ minWidth: '50rem' }}>
                        {columns.map((col) => (
                            <Column key={col.field} field={col.field} header={col.header} />
                        ))}
                    </DataTable>
                </div>
            </div>
        </>
    )
}

export default DocumentsPage