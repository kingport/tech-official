import { useQuery } from "react-query";
import { getEliteInfo, IGetEliteResultReq } from "../apis";
import { RQ_ELITE } from '../apis/key'

export const useEliteInfoResult = (params: IGetEliteResultReq) => {
  const result = useQuery([RQ_ELITE,params], async() => {
    return getEliteInfo(params)
  },
  {
    enabled: !!params?.subtitleId,
  })
  return result
}

