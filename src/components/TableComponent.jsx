import React from 'react';
import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title, Text } from "@tremor/react";
import { StatusOnlineIcon } from '@heroicons/react/solid';

const data = [
  {
    name: 'Jamie Dimon',
    role: 'CEO',
    department: 'JPMorgan Chase',
    status: 'active',
  },
  {
    name: 'Brian Moynihan',
    role: 'CEO',
    department: 'Bank of America',
    status: 'active',
  },
  {
    name: 'Jane Fraser',
    role: 'CEO',
    department: 'Citigroup',
    status: 'active',
  },
  {
    name: 'David Solomon',
    role: 'CEO',
    department: 'Goldman Sachs',
    status: 'active',
  },
  {
    name: 'James Gorman',
    role: 'CEO',
    department: 'Morgan Stanley',
    status: 'active',
  },
  {
    name: 'Michael Corbat',
    role: 'CEO',
    department: 'Citigroup',
    status: 'inactive',
  },
  {
    name: 'Charles Scharf',
    role: 'CEO',
    department: 'Wells Fargo',
    status: 'active',
  },
  {
    name: 'Roger Ferguson',
    role: 'CEO',
    department: 'TIAA',
    status: 'active',
  },
  {
    name: 'Tim Sloan',
    role: 'CEO',
    department: 'Wells Fargo',
    status: 'inactive',
  },
  {
    name: 'Lloyd Blankfein',
    role: 'CEO',
    department: 'Goldman Sachs',
    status: 'inactive',
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-4 bg-white text-gray-900">
      <Title>List of American Bank Executives</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Bank</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>
                <Text>{item.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.department}</Text>
              </TableCell>
              <TableCell>
                <Badge color={item.status === 'active' ? "emerald" : "red"} icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
