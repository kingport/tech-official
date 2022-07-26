import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getHomeResult, IGetHomeResultReq } from "../apis";
import { RQ_HOME_RESULT } from '../apis/key'

export const useHomeResult = (params: IGetHomeResultReq) => {
  const result = useQuery([RQ_HOME_RESULT], async() => {
    return getHomeResult(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
