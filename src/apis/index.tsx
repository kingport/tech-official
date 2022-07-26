import axios from "./request";

// 获取首页信息
export interface IGetHomeResultReq {
  language?: string,
  topTitleId?: number,
}
export interface IHomeResult {
  key: any,
  pc?: {
    banner1: string,
    banner2: string,
    banner3: string,
    banner4: string,
    banner5: string,
  },
  h5?: {
    banner1: string,
    banner2: string,
    banner3: string,
    banner4: string,
    banner5: string,
  },
}
export const getHomeResult = async (params: IGetHomeResultReq) => {
  const res = await axios.get('/front/index/find', {params})
  return res?.data as IHomeResult | undefined;
}

// 获取全局菜单
export interface IGetMenusResultReq {
  companyId: number,
  language?: string,
}
export interface IMenusResult {

}
export const getMenusResult = async (params: IGetMenusResultReq) => {
  const res = await axios.get(`/front/menu/find/${params?.companyId}`)
  return res?.data as IMenusResult | undefined;
}

// 底部友情链接
export interface IGetFooterResultReq {
  companyId: number,
  language?: string,
}
export interface IFooterUrlResult {
  quickCode: string
}
export const getFooterUrl = async (params: IGetFooterResultReq) => {
  const res = await axios.get(`/front/bottom/${params?.companyId}`)
  return res?.data as IFooterUrlResult | undefined;
}
