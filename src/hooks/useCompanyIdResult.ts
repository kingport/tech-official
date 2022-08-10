import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getCompanyId, IGetCompanyIdResultReq } from "../apis";
import { RQ_COMPANY_ID } from '../apis/key'

export const useCompanyIdResult = (params: IGetCompanyIdResultReq) => {
  const result = useQuery([RQ_COMPANY_ID], async() => {
    return getCompanyId(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}

