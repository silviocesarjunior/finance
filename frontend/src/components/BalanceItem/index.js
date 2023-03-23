import React,{useMemo} from 'react';
import { Container, Label,Balance } from './styles';

export default function BalanceItem({data}){
    const labelName = useMemo(() => {
        if(data.tag === 'saldo'){
            return{
                label: 'Saldo atual',
                color: '3b3dbf'
            }
        }else if(data.tag === 'receita'){
            return {
                label: 'Entradas',
                color: '00b94A'
            }
        }else{
            return {
                label: 'Saídas',
                color: 'EF463A'
            }
        }

    },[data])

    return(
        <Container bg={labelName.color}>
            <Label>{labelName.label} </Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}