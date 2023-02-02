import Global from "./styles/global"
import Header from "./components/header";
import Resume from "./components/resume";
import Form from "./components/Form";
import {useEffect, useState} from "react";

function App() {
    const data = localStorage.getItem("transactions")
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList// @ts-ignore
            .filter((item) => item.expense)// @ts-ignore
            .map((transactions) => Number(transactions.amount));

        const amountIncome = transactionsList// @ts-ignore
            .filter((item) => !item.expense)// @ts-ignore
            .map((transactions) => Number(transactions.amount));

        // @ts-ignore
        const  expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        // @ts-ignore
        const  income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);
        // @ts-ignore
        setIncome(`R$ ${income}`);
        // @ts-ignore
        setExpense(`R$ ${expense}`);
        // @ts-ignore
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)


    }, [transactionsList]);

    // @ts-ignore
    const handleAdd = ( transaction ) => {
        // @ts-ignore
        const newTransactions = [...transactionsList, transaction];

        setTransactionsList(newTransactions)

        localStorage.setItem("transactions", JSON.stringify(newTransactions));
    };


    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
            <Global />
        </>
    )
}

export default App
