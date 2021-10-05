import React, { useState } from "react";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./styles";

import {
  Button,
  CategorySelect,
  Input,
  TransactionTypeButton,
} from "../../components/Form";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />
          <TransactionsType>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              onPress={() => handleTransactionTypeSelect("up")}
              type="up"
              title="income"
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              onPress={() => handleTransactionTypeSelect("down")}
              type="down"
              title="outcome"
            />
          </TransactionsType>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
