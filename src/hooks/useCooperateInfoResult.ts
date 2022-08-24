import { useQuery } from "react-query";
import {  getCooperateInfo, IGetCooperateInfoResultReq } from "../apis";
import { RQ_COOPERATE } from '../apis/key'

export const useCooperateInfoResult = (params: IGetCooperateInfoResultReq) => {
  const result = useQuery([RQ_COOPERATE,params], async() => {
    return getCooperateInfo(params)
  },
  {
    enabled: !!params?.subtitleId,
  })
  return result
}

