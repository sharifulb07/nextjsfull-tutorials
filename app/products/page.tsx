import Link from "next/link"

export default function(){
    return(
        <div>
            <h1>Products Page </h1>
            <Link href='/'>Home </Link>
            <Link href='/products/'> Products Page </Link>
            <Link href='/products/1'>Products One </Link>
            <Link href='/products/2'>Products Two </Link>
            <Link href='/products/3'>Products Three </Link>

        </div>
    )
}