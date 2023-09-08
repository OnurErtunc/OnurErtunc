
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import DocumentsPage from './components/pages/DocumentsPage';
import DocumentEditorPage from './components/pages/DocumentEditorPage';
import NotFoundPage from './components/pages/NotFoundPage';

        

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/documents/" element={<DocumentsPage />} />
          <Route path="/documents/:documentId" element={<DocumentEditorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
