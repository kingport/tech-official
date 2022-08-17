import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getCompanyInfo, IGetCompanyResultReq } from "../apis";
import { RQ_COMPANY_INFO } from '../apis/key'

export const useCompanyResult = (params: IGetCompanyResultReq) => {
  const result = useQuery([RQ_COMPANY_INFO, params], async() => {
    return getCompanyInfo(params)
  },
  {
    // enabled: !isEmpty(params) && !isNil(params),
    enabled: !!params?.subtitleId,
  })
  return result
}
