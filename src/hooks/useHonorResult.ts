import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getHonorInfo, IGetHonorResultReq } from "../apis";
import { RQ_COMPANY_INFO } from '../apis/key'

export const useHonorResult = (params: IGetHonorResultReq) => {
  const result = useQuery([RQ_COMPANY_INFO], async() => {
    return getHonorInfo(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
