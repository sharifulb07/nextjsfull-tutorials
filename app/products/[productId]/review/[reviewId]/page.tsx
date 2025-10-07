export default async function ReviewPage(
    {params}:{params:Promise<{productId:string, reviewId:string}>}
){
    const {productId, reviewId}=await params;
    return <h1>Product No {productId} has review number {reviewId} </h1>
}