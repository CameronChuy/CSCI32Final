import {Table} from '@radix-ui/themes'


const defaultRecords = [
    {
    title: "Chip",
    description: "fluff",
    Image: "Image"
    },
]
export default function MyTable({columns = defaultColumns, records = defaultRecords}) {
    return (
    <Table.Root>
    <Table.Header>
        <Table.Row>
        {columns.map((column, i) => (
            <Table.ColumnHeaderCell key = {i}>{column.title}</Table.ColumnHeaderCell>
            ))}
        </Table.Row>
    </Table.Header>

    <Table.Body>
        {records.map((record) => (
            <Table.Row key = {record.id}>
                {columns.map((column, i) => 
                i === 0 ? (
                    <Table.RowHeaderCell key = {`${record.id}-${i}`}>{record[column.key]}</Table.RowHeaderCell>
                ) : (
                    <Table.Cell key ={`${record.id}-${i}`}>{record[column.key]}</Table.Cell>
                ))}
            </Table.Row>
        ))}
        </Table.Body>
    </Table.Root>
    )
}