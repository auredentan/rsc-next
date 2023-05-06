import { db } from "@/db.server";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getActivities } from "@rsc/db";

export const loader = async () => {
  const activities = await getActivities(db);
  console.log('activities', {activities})
  return json({ activities });
};
export default function Activities() {
  const { activities } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2>Activities</h2>
      <Link to="/activities/new">Create new activity</Link>
      <div>
        {activities.map((activity) => (
          <div>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
