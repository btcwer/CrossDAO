
import React from 'react'
import {ContractFactory} from 'ethers'
import json from '../abi/erc20.json'
import {useSigner} from 'wagmi'

export default function useContractFactory() {
  const {data:singer} = useSigner({
    onError(error){
      console.log('useSinger Error:', error)
    },
  })
  const factory = new ContractFactory(json.abi, json.bytecode, singer)

  return ({ factory })
}