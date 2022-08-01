import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getNewsEvents, IGetNewsEventResultReq } from "../apis";
import { RQ_NEWS_EVENTS_LIST } from '../apis/key'

export const useNewsEventResult = (params: IGetNewsEventResultReq) => {
  const result = useQuery([RQ_NEWS_EVENTS_LIST], async() => {
    return getNewsEvents(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
