import { ScrollPanel } from 'primereact/scrollpanel';
import React, { useEffect, useState } from 'react';
import { ScrollTop } from 'primereact/scrolltop';

interface EditorPageScrollableProps {
    children: React.ReactNode
}


const EditorPageScrollable: React.FC<EditorPageScrollableProps> = ({ children }) => {

    

    return (
        <>
            <div className='card'>
                <ScrollPanel style={{ width: '250px', height: '200px'}}>
                    {children}
                    <ScrollTop target="parent" className="custom-scrolltop" threshold={100} icon="pi pi-arrow-up"></ScrollTop>
                </ScrollPanel>
            </div>
        </>
    );
}

export default EditorPageScrollable