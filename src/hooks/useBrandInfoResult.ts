import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getBrandInfo, IGetBrandInfoResultReq } from "../apis";
import { RQ_BRAND_INFO } from '../apis/key'

export const useBrandInfoResult = (params: IGetBrandInfoResultReq) => {
  const result = useQuery([RQ_BRAND_INFO, params], async() => {
    return getBrandInfo(params)
  },
  {
    enabled: !!params?.subtitleId,
  })
  return result
}
