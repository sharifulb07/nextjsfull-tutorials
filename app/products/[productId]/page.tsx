export default async function DetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  return (
    <div>
      <h1>Details of product number {productId}</h1>
    </div>
  );
}
