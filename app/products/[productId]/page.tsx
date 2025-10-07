export default async function DetailsPage({
  params,
}: {
  params: Promise<{productId:string}>
}) {
  const { productId } = await params;

  return (
    <div>
      <h1>Details of product number {productId}</h1>
    </div>
  );
}
