import { User } from "../types/user.ts";
import db from "../database/mongodb.ts";


// Table Connection
const userCollection = db.collection("users");


// @Desc Add user
// @Route  /api/v1/adduser
const addUser = async ({ request, response }: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "No data provided" };
    return;
  }
  const values = await body.value;
  let user: User = values;
  let savedId = await userCollection.insertOne(user);
  user.savedId = savedId;
  response.status = 201;
  response.body = {
    success: true,
    data: user,
  };
};

// @Desc Get All Users
// @Route  /api/v1/getallusers
const getUsers = async ({ response }: {
  response: any;
}) => {
  const users = await userCollection.find();

  response.status = 200;
  response.body = {
    sucess: true,
    message: "Data Found",
    data: users,
  };
};

// @Desc Get One user
// @Route  /api/v1/getuser/id
const getUser = async ({ params, response }: {
  params: { id: string };
  response: any;
}) => {
  const user = await userCollection.findOne({
    _id: { $oid: params.id },
  });

  response.status = 200;
  response.body = {
    sucess: true,
    message: "Data Found",
    data: user,
  };
};

// @Desc Update user
// @Route  /api/v1/updateuser/id
const updateUser = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  if (request.body()) {
    const body = await request.body();
    console.log("Body", body);
    const updateData = await body.value;
    console.log("Update Data", updateData);
    const modifiedCount = await userCollection.updateOne(
      { _id: { $oid: params.id } },
      {
        $set: { ...updateData },
      },
    );

    if (!modifiedCount) {
      response.status = 404;
      response.body = {
        sucess: false,
        message: "No Data Found",
      };
      return;
    }

    response.status = 200;
    response.body = {
      sucess: true,
      data: await userCollection.findOne({
        _id: { $oid: params.id },
      }),
    };
  } else {
    response.status = 404;
    response.body = {
      sucess: false,
      message: "Params Required",
    };
  }
};

// @Desc Delete User user
// @Route  /api/v1/deleteuser/id
const deleteUser = async ({ params, response }: {
  params: { id: string };
  response: any;
}) => {
  const count = await userCollection.deleteOne({
    _id: { $oid: params.id },
  });

  if (!count) {
    response.status = 404;
    response.body = {
      sucess: false,
      message: "No Data Found",
    };
  } else {
    response.status = 200;
    response.body = {
      sucess: true,
      message: "User Deleted Sucessfully!",
    };
  }
};

export {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
