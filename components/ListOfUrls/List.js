import { Table } from "semantic-ui-react";

function ListItem(props){
    let list = props.items.map((item, index) => {
        return (
            
              <Table.Row key={item._id}>
                <Table.Cell className="blue-with-padding">{index}</Table.Cell>
                <Table.Cell className="yellow-with-large-padding">{item.originalUrl}</Table.Cell>
                <Table.Cell>{item.shortUrl}</Table.Cell>
                <Table.Cell className="yellow-with-large-padding">{item.date}</Table.Cell>
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