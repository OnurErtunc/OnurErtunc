import EditorPageScrollable from "../utilities/EditorPageScrollable"
import TrackChangeDataCard from "../utilities/TrackChangeDataCard"
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';

const DocumentEditorPage = () => {

    

    return (
        <>
            <h1>DocumentEditorPage</h1>
            <div className="grid">
                <div className="col-9">
                    <TrackChangeDataCard />
                </div>
                <div className="col-3">
                <ScrollPanel style={{ width: "100%", height: '700px'}}>
                    <TrackChangeDataCard />
                    <TrackChangeDataCard />
                    <TrackChangeDataCard />
                    <TrackChangeDataCard />
                    <ScrollTop target="parent" className="custom-scrolltop" threshold={100} icon="pi pi-arrow-up"></ScrollTop>
                </ScrollPanel>
                </div>
            </div>
        </>
    )
}

export default DocumentEditorPage
