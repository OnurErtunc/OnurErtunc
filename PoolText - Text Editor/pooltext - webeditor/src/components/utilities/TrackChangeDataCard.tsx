import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";


const TrackChangeDataCard = () => {

    const footer = ( 
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Accept" className="p-button-success" />
            <Button label="Reject" className="p-button-danger" />
        </div>
    );

    return (
        <>
            <Card title="Title" subTitle="Subtitle" footer={footer} >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </>
    );
    
}

export default TrackChangeDataCard