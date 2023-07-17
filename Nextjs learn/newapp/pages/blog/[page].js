import { useRouter } from "next/router";
const Page = () => {
    const pgNo = useRouter();
    return (
      <div>
        <h1>Hello Blog { pgNo.query.page} page with dynamic routing</h1>
      </div>
    )
  }
  
  export default Page;
  