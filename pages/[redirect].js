
import { useRouter } from 'next/router';
import axios from 'axios';

function Redirect({items}) {
    
    return (
      <div>
        soething
      </div>
  
    )
  }
  
  Redirect.getInitialProps = async (context) => {
    console.log(context.asPath);
    const res = await axios.post(`http://localhost:3000/api/short/redirect`, {path: context.asPath})
    const items = await res.data;
    console.log(items);
    return "items: items"
  }
  
  export default Redirect