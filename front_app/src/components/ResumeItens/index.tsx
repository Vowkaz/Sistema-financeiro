import * as S from './styles'
import {IconType} from "react-icons/lib";
interface ResumeProps {
    Icon : IconType,
    title: string,
    value: number
}
export default function ResumeItens({ Icon, title, value}: ResumeProps) {
    return (
        <S.Container>
            <S.Header>
                <S.HeaderTitle>
                    {title}
                </S.HeaderTitle>
                <Icon />
            </S.Header>
            <S.Total>{ value }</S.Total>
        </S.Container>
    )
}