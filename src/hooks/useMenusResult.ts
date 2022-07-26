import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getMenusResult, IGetMenusResultReq } from "../apis";
import { RQ_GLOBAL_MENUS } from '../apis/key'

export const useMenusResult = (params: IGetMenusResultReq) => {
  const result = useQuery([RQ_GLOBAL_MENUS], async() => {
    return getMenusResult(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
