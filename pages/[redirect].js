import axios from 'axios';
import settings from '../next.config';
import { Header } from "semantic-ui-react";


function Redirect({items}) {
    
    return (
      <div style={{margin: "10rem"}}>
        <Header as='h1'>{items}</Header>
      </div>
  
    )
  }
  
  Redirect.getInitialProps = async (context) => {
    console.log(context.asPath);
    const res = await axios.post(`${settings.env.WEB_DOMIAN}/api/short/redirect`, {path: context.asPath})
    console.log(res.data);
    if(res.data.message === "No such URI"){
      return {items: res.data.message}
    }
    return "Will not get here (:";
  }
  
  export default Redirect