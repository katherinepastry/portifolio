import CadastroForm from "@/components/RegisterProductComponent/CadastroForm";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next';

export default function RegistrationProduct() {
  return <CadastroForm />;
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
