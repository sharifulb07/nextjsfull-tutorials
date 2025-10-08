
import { notFound } from "next/navigation";



export default async function DetailsPage({
  params,
}: {
  params: Promise<{productId:string}>
}) {
  const { productId } = await params;
  // if(parseInt(productId)<10){
  //   notFound();

  // }

  return (
    <div>
      <h1>Details of product number {productId}</h1>
    </div>
  );
}
