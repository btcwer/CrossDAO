import React, { useEffect } from "react"
import { useState } from "react";

import { Grid, Button, Input } from "@nextui-org/react";
import useContractFactory from "../hooks/useContractFactory";
import MessageBox from "./MessageBox";

export default function Pannel(){
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [contractAddress, setContractAddress] = useState('')
    const [txHash, setTxHash] = useState('')
    const [deployDone, setDeployDone] = useState(false)
    
    const closeMessageBox = ()=>{
        setDeployDone(false)
    }

    const { factory } = useContractFactory()
    const deploy = ()=> {
        const deployContract = async ()=>{
           let contract = await factory.deploy(coinName, coinSymbol)
           //console.log(contract.address, contract.deployTransaction)
           setContractAddress(contract.address)
           setTxHash(contract.deployTransaction.hash)
           setDeployDone(true)
        }
        deployContract()
    }

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} justify="center">
                <Input label="Token Name" placeholder="XYZ Coin" width="300px" value={coinName} onChange={(e)=>{setCoinName(e.target.value)}} />
            </Grid>
            <Grid xs={12} justify="center">
                <Input label="Token Symbol" placeholder="XYZ" width="300px" value={coinSymbol} onChange={(e)=>{setCoinSymbol(e.target.value)}}/>
            </Grid>
            <Grid xs={12} justify="center">
                <Button color="success" auto onPress={()=>deploy()}>Create ERC20 Token</Button>
            </Grid>         
            <MessageBox contractaddress={contractAddress} txhash={txHash} visible={deployDone} closeMessageBox={closeMessageBox}/>   
        </Grid.Container>
    )
}