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
        {columns.map((column) => (
            <Table.ColumnHeaderCell>{column.title}</Table.ColumnHeaderCell>
            ))}
        </Table.Row>
    </Table.Header>

    <Table.Body>
        {records.map((record) => (
            <Table.Row>
                {columns.map((column, i) => 
                i === 0 ? (
                    <Table.RowHeaderCell>{record[column.key]}</Table.RowHeaderCell>
                ) : (
                    <Table.Cell>{record[column.key]}</Table.Cell>
                ))}
            </Table.Row>
        ))}
        </Table.Body>
    </Table.Root>
    )
}