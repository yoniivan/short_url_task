import { Table } from "semantic-ui-react";


function HeaderOfList(){
    return (
        <Table.Header>
          <Table.HeaderCell>Index</Table.HeaderCell>
          <Table.HeaderCell>Original</Table.HeaderCell>
          <Table.HeaderCell>Short</Table.HeaderCell>
          <Table.HeaderCell>Date Created</Table.HeaderCell>
        </Table.Header>
      );
}

export default HeaderOfList;