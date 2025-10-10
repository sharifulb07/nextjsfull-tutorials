import Card from "@/components/Card";
import Link from "next/link";

export default async function Notifications() {
  return <Card>
    <div>

    Notifications
    </div>
<div><Link href={'/complex-dashboard/archived'}>Archived </Link></div>
  </Card>;
}
