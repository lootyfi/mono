import { Projects, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<Projects[]> {
    // Fetch data from your API here.
    return [
        {
            // organizationId: random uuid,
            organizationId: "uuid-1",
            id: "uuid-1",
            projectName: "Looty",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "1350",
            remainingTime: '2023-12-05T23:30:18.000Z',
        },
        {
            organizationId: "uuid-2",
            id: "uuid-2",
            projectName: "Exit Festival",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "230",
            remainingTime: '2023-12-05T23:30:18.000Z',
        },
        {
            organizationId: "uuid-2",
            id: "uuid-2",
            projectName: "Ultra Music Festival",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGjyoWRac_X8CyGRsCVtJxbwgO6KzbD6VdL0MQyfBnw&s",
            rewardsNumber: "10,000",
            maxMintPrice: "0.1",
            mintMintPrice: "0.1",
            stepMintPrice: "0.1",
            keysMinted: "800",
            remainingTime: '2023-12-05T23:30:18.000Z',
        }
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
