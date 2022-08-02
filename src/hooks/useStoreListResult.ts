import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getStoreList, IGetStoreListResultReq } from "../apis";
import { RQ_STORE_LIST } from '../apis/key'

export const useStoreListResult = (params: IGetStoreListResultReq) => {
  const result = useQuery([RQ_STORE_LIST], async() => {
    return getStoreList(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
