import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getWindowInfo, IGetWindowResultReq } from "../apis";
import { RQ_WINDOW_INFO } from '../apis/key'

export const useWindowResult = (params: IGetWindowResultReq) => {
  const result = useQuery([RQ_WINDOW_INFO, params], async() => {
    return getWindowInfo(params)
  },
  {
    enabled: !!params?.companyId,
  })
  return result
}
