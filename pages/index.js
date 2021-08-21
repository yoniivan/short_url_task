
import '../styles/Home.module.css';
import axios from 'axios';
import { Button, Table, Input } from "semantic-ui-react";
import HeaderOfList from '../components/ListOfUrls/header';
import ListItem from '../components/ListOfUrls/List';
import { useState, useEffect } from 'react';



function Index({items}) {
  
  const [stateAdd, setStateAdd] = useState([]);
  const [stateItems, setStateItems] = useState(items);
  
  useEffect(()=>{
    setStateItems(items);
 }, [items])

  const addUrlHandle = async(event) => {
    event.preventDefault();
    const res = await handlePost(event.target.addurl.value);
    console.log(res);
    let allItems = [...stateItems, res];
    setStateItems(allItems);
  }

  return (
    <div style={{marginLeft: "10rem", marginRight: "10rem", marginTop: "5rem"}}>
      <div>
        <form onSubmit={addUrlHandle}>
          <Input
            focus 
            placeholder='Search...'
            name="addurl"
            value={stateAdd}
            style={{ width:"600px" }}
            onInput={e => setStateAdd(e.target.value)}
            required
          />
          <Button 
            style={{marginLeft: "2rem"}}
            content='Click Here' 
            type="submit"
          />
        </form>
      </div>
      <Table>
        <HeaderOfList/>
        <Table.Body>
          <ListItem items={stateItems} />
        </Table.Body>
      </Table>
    </div>

  )
}

async function handlePost(payload){
  const res = await axios.post(`http://localhost:3000/api/short`, {"originalUrl": payload});
  console.log("handlePost");
  console.log(res.status);
  console.log(res.data);
  if(res.status !== 201){
    return [];
  }
  const items = await res.data.data;

  return items;
} 

Index.getInitialProps = async () => {
  const res = await axios.get(`http://localhost:3000/api/short`)
  const items = await res.data.data;
  return { items: items }
}

export default Index





