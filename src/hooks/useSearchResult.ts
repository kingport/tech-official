import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getSearchResult, IGetSearchResultReq } from "../apis";
import { RQ_SEARCH_RESULT } from '../apis/key'

export const useSearchResult = (params: IGetSearchResultReq) => {
  const result = useQuery([RQ_SEARCH_RESULT], async() => {
    return getSearchResult(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params?.key),
  })
  return result
}
