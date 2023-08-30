require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const authRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://admin:admin@127.0.0.1:5432/todo", 
    },
  },
});

authRoutes.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const user = await prisma.user.findUnique({
    where: { id: +id },
  });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}



authRoutes.post("/auth/register", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });

  if (userExists) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }

  // create user
  
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    
    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

authRoutes.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  // check if password match
  const checkPassword = password === user.password;

  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    console.log('secret', secret)
    console.log('user', user)

    const token = jwt.sign(
      {
        id: user.id,
      },
      secret
    );

    console.log('token', token)

    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = authRoutes;
