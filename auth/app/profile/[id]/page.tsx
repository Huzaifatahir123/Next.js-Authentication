export default async function Profile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome to your profile, {id}!</h1>
        </div>
    );
}