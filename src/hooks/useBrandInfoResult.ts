import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getBrandInfo, IGetBrandInfoResultReq } from "../apis";
import { RQ_BRAND_INFO } from '../apis/key'

export const useBrandInfoResult = (params: IGetBrandInfoResultReq) => {
  const result = useQuery([RQ_BRAND_INFO], async() => {
    return getBrandInfo(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
