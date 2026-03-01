import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//INSERT USER
const insertUser = async (email: string, name: string) => {
  const res = await prisma.user.create({
    data: {
      email,
      name,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  console.log(res);
};

// await insertUser("aloksaidhello@gmail.com", "Alok");
// await insertUser("abhijeetkumarips@gmail.com", "Abhijeet");

interface UpdateArguments {
  email: string;
  name: string;
}

// UPDATE USER
const updateUser = async (id: number, { email, name }: UpdateArguments) => {
  const res = await prisma.user.update({
    where: { id },
    data: {
      email,
      name,
    },
  });
  console.log(res);
};

// updateUser(1, { email: "alokforreal@gmail.com", name: "Alok" });
