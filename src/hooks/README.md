
// 控制满足什么条件的时候才去请求，保证安全性，一般情况必须指定
enabled: !isEmpty(params) && !isNil(params?.key),

// 每次 新请求开始 到 获取到新数据 前这段时间保留上一次的旧数据
// 一般情况分页查询，表格分页切换这种场景会用到，保证换页时不会出现一个空列表
keepPreviousData: true,

// 轮询间隔，需要轮询的时候使用
refetchInterval: 3e3,

// 获取数据成功时的回调，入参是响应值
// 有时我们只关注这个响应的部分内容，则可以在这个回调里操作，并不需要 useQuery 返回的 data 等
onSuccess: (res) => {

},

// swr 里有个在一定时间内重复请求无效的选项 dedupingInterval
// 在 react-query 里把 cache 和 stale 时间指定一致即可
staleTime: 60 * 1e3,
cacheTime: 60 * 1e3
