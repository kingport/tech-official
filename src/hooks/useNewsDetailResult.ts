import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getNewsDetail, IGetNewsDetailResultReq } from "../apis";
import { RQ_NEWS_DETAIL } from '../apis/key'

export const useNewsDetailResult = (params: IGetNewsDetailResultReq) => {
  const result = useQuery([RQ_NEWS_DETAIL], async() => {
    return getNewsDetail(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
