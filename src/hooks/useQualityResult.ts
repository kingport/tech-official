import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getQualityInfo, IGetQualityResultReq } from "../apis";
import { RQ_QUALITY_INFO } from '../apis/key'

export const useQualityResult = (params: IGetQualityResultReq) => {
  const result = useQuery([RQ_QUALITY_INFO], async() => {
    return getQualityInfo(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
