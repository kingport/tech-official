import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getResponsibilityInfo, IGetResponsibilityResultReq } from "../apis";
import { RQ_RESPONSIBILITY_INFO } from '../apis/key'

export const useResponsibilityResult = (params: IGetResponsibilityResultReq) => {
  const result = useQuery([RQ_RESPONSIBILITY_INFO], async() => {
    return getResponsibilityInfo(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
