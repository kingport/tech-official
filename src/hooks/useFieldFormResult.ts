import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getFieldForm, IGetFormResultReq } from "../apis";
import { RQ_FIELD_FORM } from '../apis/key'

export const useFieldFormResult = (params: IGetFormResultReq) => {
  const result = useQuery([RQ_FIELD_FORM], async() => {
    return getFieldForm(params)
  },
  {
    enabled: !isEmpty(params) && !isNil(params),
  })
  return result
}
