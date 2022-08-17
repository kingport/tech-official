import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getAccessory, IGetAccessoryResultReq } from "../apis";
import { RQ_BRAND_ACCESSORY } from '../apis/key'

export const useAccessoryResult = (params: IGetAccessoryResultReq) => {
  const result = useQuery([RQ_BRAND_ACCESSORY,params], async() => {
    return getAccessory(params)
  },
  {
    enabled: !!params?.subtitleId,
  })
  return result
}

