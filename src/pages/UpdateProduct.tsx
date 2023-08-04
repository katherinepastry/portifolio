
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next';
import UpdateForm from "@/components/UpdateProductComponent/UpdateForm";

export default function UpdateProduct() {
  return <UpdateForm />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
