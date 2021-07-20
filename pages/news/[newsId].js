import { useRouter } from 'next/router'

function NewsId() {
    const router = useRouter()
    // to get the infomation from the url
    // console.log(router);
    return (
        <div>
            <h1>news id page</h1>
            <h2>route id {router.query.newsId}</h2>
        </div>
    )
}

export default NewsId
