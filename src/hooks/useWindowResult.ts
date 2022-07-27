import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getWindowInfo, IGetWindowResultReq } from "../apis";
import { RQ_WINDOW_INFO } from '../apis/key'

export const useWindowResult = (params: IGetWindowResultReq) => {
  const result = useQuery([RQ_WINDOW_INFO], async() => {
    return getWindowInfo(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
