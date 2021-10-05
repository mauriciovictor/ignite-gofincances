import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionsCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "10/12/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/12/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Desenvolvimento mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "10/12/2021",
    },
    {
      id: "4",
      type: "positive",
      title: "Desenvolvimento mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Jogos",
        icon: "dollar-sign",
      },
      date: "10/12/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/47354114?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mauricio Ferreira</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title> Listagem </Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
