import React from "react";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import LoginForm from "@/components/loginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Login",
};

async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return (
      <Flex
        minHeight="100vh"
        minWidth="max-content"
        alignItems="center"
        justify={"center"}
      >
        <Container>
          <Card boxShadow="xl" variant={'outline'}>
            <CardHeader >
              <Heading size="md" textAlign={"center"}>Login</Heading>
            </CardHeader>
            <CardBody>
              <LoginForm />
            </CardBody>
          </Card>
        </Container>
      </Flex>
    );
  } else {
    redirect("/admin");
  }
}

export default page;
