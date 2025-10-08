import Counter from "@/components/Counter";

export const metadata={
    title:"Counter page metadata now ",
    description:'This is counter description metadata now'
}

export default function CounterPage(){
    return(
        <div>
            <h2>This is counter component which is client component</h2>
            <Counter />
        </div>
    )
}