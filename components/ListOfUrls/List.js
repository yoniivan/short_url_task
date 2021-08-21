import { Table } from "semantic-ui-react";

function ListItem(props){
    let list = props.items.map((item, index) => {
        let long = item.originalUrl.length > 40 ? item.originalUrl.substring(0, 60) + " . . ." : item.originalUrl;
        return (
            
              <Table.Row key={item._id}>
                <Table.Cell>{index}</Table.Cell>
                <Table.Cell>{long}</Table.Cell>
                <Table.Cell>{item.shortUrl}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
              </Table.Row>
              
        );
    });

    if(props.items.length > 0){
        return list;
    }else{
        return <h1>List is empty</h1>
    }
}

export default ListItem;