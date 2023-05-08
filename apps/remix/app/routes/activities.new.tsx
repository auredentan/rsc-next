import { ActionArgs } from "@remix-run/node";

import { makeDomainFunction } from "domain-functions";

import { z } from "zod";

import { db } from "@/db.server";
import { createActivity } from "@rsc/db";
import { formAction } from "@/form-action.server";

import { Form } from "@/form"; /* path to your custom Form */
import { Suspense } from "react";
import { useNavigation } from "@remix-run/react";

const newActivitySchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const newActivityMutation = makeDomainFunction(newActivitySchema)(
  async (values) =>
    await createActivity(db, {
      creatorId: 1,
      description: values.description,
      title: values.title,
    }),
);

export function action({ request }: ActionArgs) {
  return formAction({
    request,
    schema: newActivitySchema,
    mutation: newActivityMutation,
    successPath: "/activities",
  });
}

export default function NewActivity() {
  const navigation = useNavigation();

  const isDisabled =
    navigation.state === "submitting" || navigation.state === "loading";
  return (
    <div>
      <h2>New Activity</h2>
      <Form schema={newActivitySchema}>
        {({ Field, Errors, Button }) => (
          <>
            <Field name="title" label="title" />
            <Field name="description" label="description" />

            <Errors />
            <Button />
          </>
        )}
      </Form>
    </div>
  );
}
