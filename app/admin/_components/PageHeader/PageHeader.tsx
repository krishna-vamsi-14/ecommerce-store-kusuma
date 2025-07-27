
export type PageHeaderProps = {
    title: string;
    description: string;
}

export const PageHeader = ({title, description}: PageHeaderProps) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <p className="text-3xl font-extrabold">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}