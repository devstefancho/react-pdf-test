import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './components/MyDocument';
import ReactPDF from '@react-pdf/renderer';
import axios from 'axios';


export const App = () => {
  const onClickDownload = async () => {
    const data = await axios.get('http://localhost:8080/download')
    console.log(data);
  }
  return (
    <div>
      <div>
        <button onClick={onClickDownload}>Download</button>
      </div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  )
}
