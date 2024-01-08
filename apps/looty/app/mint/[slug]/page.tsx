import { use } from "react";
import { IProject } from "../../lib/interface";
import ProjectMint from "../../components/project-mint/projectMint";

export default function Page({ params }: { params: { slug: string } }) {
    console.log(params, 'params');


    async function getData(): Promise<IProject | undefined> {
        try {
            const response = await fetch(`http://localhost:3000/api/project/get/${params.slug}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return undefined
        }
    }

    const data = use(getData());
    console.log(data?.mintConfig, 'data?.mintConfig');

    return (
        <ProjectMint data={data!} />
    )
}