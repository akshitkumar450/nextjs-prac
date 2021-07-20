import Link from 'next/link'
import { useRouter } from 'next/router'
function Details() {
    const router = useRouter()
    return (
        <div>
            <Link href='/'>home</Link>
            <h1
                // to navigatve to new pages
                onClick={() => router.replace('/news/hello')}
                style={{ cursor: 'pointer' }}
            >
                details
            </h1>
        </div>
    )
}

export default Details
