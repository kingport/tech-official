import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getFooterUrl, IGetFooterResultReq } from "../apis";
import { RQ_FOOTER_URL } from '../apis/key'

export const useFooterUrlResult = (params: IGetFooterResultReq) => {
  const result = useQuery([RQ_FOOTER_URL, params], async() => {
    return getFooterUrl(params)
  },
  {
    enabled: !!params?.companyId,
  })
  return result
}
