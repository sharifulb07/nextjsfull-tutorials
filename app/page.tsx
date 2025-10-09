import dynamic from "next/dynamic";
const LazySpike=dynamic(()=>import('@/components/Story'),{ loading:()=><h2>Sharif story is loading </h2>})

// import Story from "@/components/Story";

export default async function Home() {


  return (
    <div>
      <h3>This is shariful story now </h3>
      <LazySpike />
      {/* <Story /> */}
      
    </div>
  )
}
