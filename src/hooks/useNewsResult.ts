import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getNews, IGetNewsResultReq } from "../apis";
import { RQ_NEWS_EVENTS } from '../apis/key'

export const useNewsResult = (params: IGetNewsResultReq) => {
  const result = useQuery([RQ_NEWS_EVENTS], async() => {
    return getNews(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
