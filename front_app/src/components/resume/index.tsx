import { Container } from './styles'
import ResumeItens from "../ResumeItens";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/all";

export default function Resume({ income, expense, total }: any) {
    return (
        <Container>
            <ResumeItens title="Entradas" value={income} Icon={FaRegArrowAltCircleUp}/>
            <ResumeItens title="Saídas" value={expense} Icon={FaRegArrowAltCircleDown}/>
            <ResumeItens title="Total" value={total} Icon={FaDollarSign}/>
        </Container>
    )
}